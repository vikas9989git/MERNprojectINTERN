 const jwt=require('jsonwebtoken')

 const verifyToken=(req,res,next)=>{
    // get the token from the headers property
    let token=req.headers.authorization;
    // if no token found
    if(token===undefined){
        res.send({message:"Unauthorized user"});
    }
    try{
        // verify token
        jwt.verify(token,'abcdef');
        // forward req to next middleware or request api
        next();
    }
    catch(err){
        next(err);
    }
 }
 module.exports=verifyToken