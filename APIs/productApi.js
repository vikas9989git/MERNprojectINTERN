const exp=require('express')
const productApp=exp.Router();

let expressAsyncHandler=require("express-async-handler");

// let middleware1=(req,res,next)=>{
//     console.log("Middleware 1 is executed");
//     // for ware require obj to next middleware  
//     next()
// }
// let middleware2=(req,res,next)=>{
//     console.log("Middleware 2 is executed");
//     next()
// }
// productApp.use(middleware1) 
// productApp.use(middleware2)


productApp.get('/getproducts',(req,res)=>{
    let productcollectionObj=req.app.get("productscollectionObj")
    productcollectionObj.find().toArray()
    .then(userArray=>res.send({message:"all Products data",payload:userArray}))
    .catch(err=>{
        console.log("err in reading products ",err);
        res.send({message:"Error",payload:err.message})
    })
    
})
productApp.get('/getproduct/:id',expressAsyncHandler(async(req,res)=>{
    productId=(+req.params.id);
    let productcollectionObj=req.app.get("productscollectionObj")
    let productObj=await productcollectionObj.findOne({pId:{$eq:productId}});
    res.send({message:"product",payload:productObj})
}))

// for post request

productApp.post('/create-product',expressAsyncHandler(async(req,res)=>{
    let productcollectionObj=req.app.get("productscollectionObj")
    // get userObj from req
    let productObj=req.body;
    
    // verify duplicate user
    let result=await productcollectionObj.findOne({pName:productObj.pName});

    // if username existed ,send response as dupliacte user
    if(result!==null){
        res.send({message:"product has laready existed.. please create another product"})
    }
    else{
        // insert user obj
        await productcollectionObj.insertOne(productObj);
        // send res
        res.send({message:"product created"})
    }
}))
// for put Request

productApp.put('/update-product/:id',expressAsyncHandler(async(req,res)=>{
    let productId=(+req.params.id)
    let modifiedProduct=req.body
    let productcollectionObj=req.app.get("productscollectionObj")
    let productObj=await productcollectionObj.findOne({pId:{$eq:productId}});
    if(productObj===null){
        res.send({message:"No product Exists"})
    }
    else{
        await productcollectionObj.updateOne({pId:productId},{$set:{pName:modifiedProduct.pName,category:modifiedProduct.category,creationDate:modifiedProduct.creationDate,expiryDate:modifiedProduct.expiryDate,mrp:modifiedProduct.mrp}});
        res.send({message:"product updated"})
    } 
}))

// for delete rquest

productApp.delete('/delete-product/:id',expressAsyncHandler(async(req,res)=>{
    let productId=(+req.params.id)
    let productcollectionObj=req.app.get("productscollectionObj")
    let productObj=await productcollectionObj.findOne({pId:{$eq:productId}});
    if(productObj===null){
        res.send({message:"product not found to delete"})
    }
    else{
        await productcollectionObj.deleteOne({pId:{$eq:productId}}) 
        res.send({message:"product deleted"})
    }
}))

module.exports=productApp