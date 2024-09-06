const exp=require('express')
const userApp=exp.Router();


let expressAsyncHandler=require("express-async-handler");
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const verifyToken=require("../middlewares/verifyToken")

userApp.get('/getusers',(req,res)=>{
    // send response  
    let usercollectionObj=req.app.get("usercollectionObj")
    usercollectionObj.find().toArray()
    .then(userArray=>res.send({message:"All users data",payload:userArray}))
    .catch(err=>{
        console.log("err in reading users ",err);
        res.send({message:"Error",payload:err.message})
    })
});
userApp.get('/getusers/:id',expressAsyncHandler(async (req,res)=>{
    let usercollectionObj=req.app.get("usercollectionObj")

    let userId=+req.params.id;

    let userObj=await usercollectionObj.findOne({id:{$eq:userId}});
    res.send({message:"User",payload:userObj})
    
}))
// create user api routes for post req
userApp.post('/create-user',expressAsyncHandler(async(req,res)=>{
    // get usercollection obj
    let usercollectionObj=req.app.get("usercollectionObj")
    // get userObj from req
    let userObj=req.body;
    
    // verify duplicate user
    let result=await usercollectionObj.findOne({username:userObj.username});

    // if username existed ,send response as dupliacte user
    if(result!==null){
        res.send({message:"User has laready existed.. please choose another username"})
    }
    else{
        // if username not existed hash the password
        let hashedPassword=await bcryptjs.hash(userObj.password,5)
        // replace plain password with hassed password
        userObj.password=hashedPassword;
        // insert user obj
        await usercollectionObj.insertOne(userObj);
        // send res
        res.send({message:"user created"})
    }
}))

// creat api for user login by credentials
userApp.post("/login",expressAsyncHandler(async(req,res)=>{
    let usercollectionObj=req.app.get("usercollectionObj");
    // get userobj from req
    let userCredentialsObj=req.body;
    // verify username
    let user =await usercollectionObj.findOne({username:userCredentialsObj.username})
    // if username not found
    if(user===null){
        res.send({message:"invalid username"})
    }
    else{
        // compare passwords
        let result=await bcryptjs.compare(userCredentialsObj.password,user.password)
        if(result==false){
            res.send({message:"Invalid password"})
        }
        else{
            // create jwttoken
            let token=jwt.sign({username:user.username},'abcdef',{expiresIn:"2h"})
            res.send({message:"success",token:token,user:user})
        }
    }
}))

module.exports=userApp