import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {MdEdit} from 'react-icons/md'
import axios from 'axios'
import './Product.css'
import Footer from '../Footer/Footer'
function Products() {
    let {isSuccess}=useSelector((state) => state.userLogin)
    let navigate=useNavigate()
    let [products,setProduct]=useState([])
    useEffect(()=>{
        showProducts();
    },[])
    let showProducts=async()=>{
        let res=await axios.get("http://localhost:5000/product/getproducts")
        setProduct(res.data.payload)
    }
    let editButton=(object)=>{
        if(isSuccess){
            navigate(`/editproduct/${object.pId}`)
        }
        else{
            navigate('/login')
        }
    }
  return (
    <div className='mt-4'>
        <table className="table container table-striped shadow-lg">
            <thead >
                <tr className='text-center'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>MRP</th>
                    <th>Category</th>
                    <th>Creation Date</th>
                    <th>Expiry Date</th>
                    <th><MdEdit/>Action</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {
                    products.map(object=>
                        <tr key={object.pId}>
                            <td>{object.pId}</td>
                            <td>{object.pName}</td>
                            <td>{object.mrp}</td>
                            <td>{object.category}</td>
                            <td>{object.creationDate}</td>
                            <td>{object.expiryDate}</td>
                            <td>
                               <a onClick={()=>editButton(object)}>Edit Product</a>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Products