import axios from 'axios';
import { useState, createContext, useContext, useEffect } from "react";
import {useForm} from 'react-hook-form'
import {FaSave} from 'react-icons/fa'
import {MdEdit} from 'react-icons/md'
import { useNavigate,useParams } from 'react-router-dom';
function EditProduct() {
    let [productObj,setProduct]=useState({});
    let navigate=useNavigate()
    let params=useParams();
    useEffect(()=>{
        getProductDetails();
    },[])
    let getProductDetails=async()=>{
        let res=await axios.get(`http://localhost:5000/product/getproduct/${params.id}`)
        setProduct(res.data.payload); 
    }
    let {register,handleSubmit}=useForm();
    let formSubmit=async(updatedObj)=>{
        for(var prop in updatedObj){
            if(updatedObj[prop]===""){
                updatedObj[prop]=productObj[prop]
            }
        }
        let res=await axios.put(`http://localhost:5000/product/update-product/${params.id}`,updatedObj)
        console.log(res)
        if(res.data.message==="product updated"){
            navigate('/userprofile')
        }
    }
  return (
    <div>
        <div className="container shadow my-5">
            <div className="row">
                <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form p-5">
                <img src="https://thumbs.dreamstime.com/b/guy-sitting-computer-vector-illustration-guy-sitting-computer-vector-127528729.jpg" alt="Contact" className='w-75 rounded' />
                    <h3 className="display-4 fw-bolder">Improve Youself</h3>
                    
                </div>
                <div className="col-md-6 p-5" >
                    <h1 className="display-6 fw-bolder mb-5">Editing</h1>
                    <form className="px-md-2" onSubmit={handleSubmit(formSubmit)}>
                    <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="pName">Product Name</label>
                                    <input type="text" id="pName" defaultValue={productObj.pName} className="form-control" {...register("pName")}/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline ">
                                            <label htmlFor='creationDate' className="form-label">Creation Date</label>
                                            <input type="text" defaultValue={productObj.creationDate} className="form-control" id="creationDate" {...register("creationDate")}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline ">
                                            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                            <input type="text" className="form-control" defaultValue={productObj.expiryDate}  id="expiryDate" {...register("expiryDate")}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label htmlFor="mrp" className="form-label">MRP</label>
                                            <input type="number" defaultValue={productObj.mrp} className="form-control" id="mrp" {...register("mrp")}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div class="form-outline ">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <input type="text" defaultValue={productObj.category}  className="form-control" id="category" {...register("category")}/>
                                        </div>
                                    </div>
                                </div>
                        <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Save</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
  )
}

export default EditProduct