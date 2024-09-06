import {React,useEffect} from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
import {useSelector,useDispatch} from 'react-redux'
import {UserLoginLifeCycle} from '../../store/UserLoginSlice'
import {useNavigate} from 'react-router-dom'
import Footer from '../Footer/Footer'
import {NavLink} from 'react-router-dom'
function Login() {
    let {register , handleSubmit,formState: { errors }}=useForm();
    let dispatch=useDispatch()
    let navigate=useNavigate();
    let {userObj,isSuccess,isError,errMsg}=useSelector((state) => state.userLogin)

    let formSubmit=(userCredObj)=>{
        let actionObj=UserLoginLifeCycle(userCredObj)
        dispatch(actionObj)
    }
    useEffect(()=>{
        if(isSuccess){
            navigate('/product')
        }
    },[isSuccess,isError])     
    
    
  return (
    // <section className="vh-100" >
    //     <div className="container py-5 h-100">
    //         <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col col-xl-10">
    //             <div className="card card1 " >
    //             <div className="row g-0">
    //                 <div className="col-md-6 col-lg-5 d-none d-md-block">
    //                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
    //                     alt="login form" className="img-fluid h-100"  />
    //                 </div>
    //                 <div className="col-md-6 col-lg-7 d-flex align-items-center">
    //                 <div className="card-body p-4 p-lg-5 text-black">

    //                     <form onSubmit={handleSubmit(formSubmit)} >
                            
    //                         <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

    //                         <div className="form-outline mb-4">
    //                             <input type="text" id="username" className="form-control form-control-lg" {...register("username")}/>
    //                             <label className="form-label" htmlFor="username">Username</label>
    //                         </div>

    //                         <div className="form-outline mb-4">
    //                             <input type="password" id="password" className="form-control form-control-lg" {...register("password")}/>
    //                             <label className="form-label" htmlFor="password">Password</label>
    //                         </div>

    //                         <div class="pt-1 mb-4">
    //                             <button className="btn btn-dark btn-lg d-block" type="submit">Login</button>
    //                         </div>

    //                         <a className="small text-muted" href="#!">Forgot password?</a>
    //                         <p className="mb-5 pb-lg-2 text-info" >Don't have an account? <a href="#!" onClick={navigate('/signup')} className='text-info'>Register here</a></p>
    //                         <a href="#!" className="small text-muted">Terms of use.</a>
    //                         <a href="#!" className="small text-muted">Privacy policy</a>
    //                     </form>

    //                 </div>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //         </div>
    //     </div>
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form p-5">
                    <img src="https://indylogix.com/img/hire-frontend-developer.webp" alt="Contact" className='w-75' />
                        <h1 className="display-4 fw-semibold">Welcome Back</h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/signup" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                        <form onSubmit={handleSubmit(formSubmit)}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">UserName</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("username")}/>
                                <div id="emailHelp" className="form-text">We'll never share your name with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"  {...register("password")}/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Login</button>

                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2 text-info" >Don't have an account? <a href="#!" onClick={navigate('/signup')} className='text-info'>Register here</a></p>
                            <a href="#!" className="small text-muted">Terms of use.</a>
                            <a href="#!" className="small text-muted">Privacy policy</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    // </section>
  )
}

export default Login