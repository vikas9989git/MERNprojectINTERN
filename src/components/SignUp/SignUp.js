import {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {FaUserAlt,FaLock} from 'react-icons/fa'
import {MdEmail,MdOutlineDateRange} from 'react-icons/md'
import Footer from '../Footer/Footer'
function SignUp() {

    let {register,handleSubmit,formState:{errors}}=useForm();

    let [errMsg,setErr]=useState("")
    let navigate=useNavigate();
    let [message,setMessage]=useState("");
    let formSubmit=async(userObj)=>{
        // http post request
        // let res=await axios.post("http://localhost:5000/user/create-user",userObj)
        // console.log(res)
        // if(res.data.message==="user created"){
        //     setMessage("user created successfully")
        // }
        // else{
        //     setErr(res.data.message)
        // }
        console.log(userObj)
    }
   
  return (
    <section className='vh-100 bg-light'>
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black rounded" >
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                        <p className='text-center fw-semibold text-success'>{message}</p>
                        <form onSubmit={handleSubmit(formSubmit)} className="mx-1 mx-md-4">
                        <p className='text-center text-danger'>{errMsg}</p>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <FaUserAlt className='me-3 mb-1 fs-3'/>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text" className="mb-3 form-control w-60" placeholder="enter username" {...register("username")}/>
                            {/* <label className="form-label" htmlFor='username'>Your Name</label> */}
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <MdEmail className='me-3 fs-3'/>
                            <div className="form-outline flex-fill mb-0">
                            <input type="number" className="mb-3 form-control" placeholder="enter email" {...register("email")}/>
                            {/* <label className="form-label" htmlFor='email'>Your Email</label> */}
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <MdOutlineDateRange className='me-3 fs-3'/>
                            <div className="form-outline flex-fill mb-0">
                            <input type="date" className="mb-3 form-control" placeholder="enter email" {...register("dob")}/>
                            {/* <label className="form-label" htmlFor='dob'>Your Date of Birth</label> */}
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <FaLock className='me-3 fs-3 '/>
                            <div className="form-outline flex-fill mb-0">
                            <input type="number" className="mb-3 form-control" placeholder="enter password"  {...register("password")}/>
                            {/* <label className="form-label" htmlFor="password">Password</label> */}
                            </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
                        <p className="mb-5 pb-lg-2 text-info" >Already have an account? <a href="#!" onClick={navigate('/login')} className='text-info'>login here</a></p>
                        </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default SignUp