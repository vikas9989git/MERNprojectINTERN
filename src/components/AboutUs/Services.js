import {useState,useEffect} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {BsChevronDoubleDown} from 'react-icons/bs'
import Products from '../Product/Products'
import axios from 'axios'
import './Services.css'
function Services() {
    let [products,setProduct]=useState([])
    let navigate=useNavigate();
    useEffect(()=>{
        showProducts();
    },[])
    let showProducts=async()=>{
        let res=await axios.get("http://localhost:5000/product/getproducts")
        setProduct(res.data.payload)
    }
    let newProducts=[products[0],products[1]]
    console.log(newProducts)
  return (
    <div>
        <section id="product">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 text-center mb-4">Our <b>Awesome</b> Products</h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
                <div className="row mt-5">
                    {/* <div className="col-md-4">
                        <div className="card p-3">
                            <div className="card-body text-center">
                                <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Aloeveera Gel</h5>
                                <p className="card-text lead">Organic <b> $90</b> </p>
                                
                                <div className="row">
                                    <div className="col-md-6 mb-2">
                                        <div className="form-outline ">
                                            <p className="card-text lead">Creation Date </p>
                                            <p>02/10/2022</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="form-outline ">
                                            <p className="card-text lead">Expire Date </p>
                                            <p>02/10/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <div className="card-body text-center">
                                <i className="fa fa-star fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Aloeveera Gel</h5>
                                <p className="card-text lead">Organic <b> $90</b> </p>
                                
                                <div className="row">
                                    <div className="col-md-6 mb-2">
                                        <div className="form-outline ">
                                            <p className="card-text lead">Creation Date </p>
                                            <p>02/10/2022</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="form-outline ">
                                            <p className="card-text lead">Expire Date </p>
                                            <p>02/10/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {
                        products.map(obj=>
                            obj.pId<105 &&
                            <div className='col-md-3' key={obj.pId}>
                                <div className="card p-3 bg-light productCard" onClick={()=>navigate('/product')}>
                                    <div className="card-body text-center">
                                        <i className="fa fa-star fa-4x mb-4 text-primary"></i>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">{obj.pName}</h5>
                                        <p className="card-text para">{obj.category} <b> {obj.mrp}</b> </p>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline ">
                                                    <p className="card-text lead">CreateDate</p>
                                                    <p>{obj.creationDate}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline ">
                                                    <p className="card-text lead">ExpiryDate</p>
                                                    <p>{obj.expiryDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div> 
        </section>
        </div>
  )
}

export default Services