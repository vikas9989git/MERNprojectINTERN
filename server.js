const exp=require('express')
const app=exp();
const c=cors()
// add body parser
app.use(c())
app.use(exp.json())

const mclient=require("mongodb").MongoClient;
const path=require("path")
app.use(exp.static(path.join(__dirname,'./build/')))

const dburl="DBURL"

mclient.connect(dburl)
.then(client=>{
    // get database obj
    let dbObj=client.db("project")
    // get collection obj
    let usercollectionObj=dbObj.collection("usercollection")
    // share to userApi
    app.set("usercollectionObj",usercollectionObj)

    let productscollectionObj=dbObj.collection("productscollection")
    app.set("productscollectionObj",productscollectionObj)
 
    let cartcollectionObj=dbObj.collection("cartcollection")
    app.set("cartcollectionObj",cartcollectionObj)

    console.log("Databse connection success")
})
.catch(err=>{console.log("err in database", err)})



const userApp=require('./APIs/userApi')
const productApp=require('./APIs/productApi')


app.use('/user',userApp)
app.use('/product',productApp)

// dealing with invalid path
app.use("**",(req,res,next)=>{
    res.send({message:"Inavlid path"})
})

// error handler
app.use((err,req,res,next)=>{
    res.send({message:err.message})
})

//align port number
const port=5000;
app.listen(port,()=>console.log(`server listening on port ${port}`)) 