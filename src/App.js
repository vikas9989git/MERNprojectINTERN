import './App.css';
import { NavLink,Route,Routes, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Home,Login,SignUp,AboutUs,Nomatch} from'./components/Allcomponents'
import EditProduct from './components/Product/EditProduct';
import Profile from './components/Profile';
import { clearState } from './store/UserLoginSlice';
import { Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import Products from './components/Product/Products';
import Footer from './components/Footer/Footer';
import {BiHome,BiLogIn,BiLogInCircle,BiCart,BiLogOut} from 'react-icons/bi'
function App() {
  let {userObj,isSuccess}=useSelector((state) => state.userLogin)
  let dispatch=useDispatch();
  const userLogout=()=>{
    // clear token
    localStorage.removeItem("token")
    let actionObj=clearState();
    dispatch(actionObj)
  }

  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="light" className='sticky-top shadow' >
        <Container>
          <Navbar.Brand href="#home" className='text-info fw-semibold'>VSVT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            {isSuccess===true?
              <>
                <LinkContainer to="/product">
                  <Nav.Link className="btn btn-outline-info ms-2 px-4 rounded-pill">Products</Nav.Link>
                </LinkContainer>
                <LinkContainer  to="/login" >
                <Nav.Link onClick={userLogout} className="btn btn-outline-info ms-2 px-4 rounded-pill">{userObj.username},Logout <BiLogOut/></Nav.Link>
                </LinkContainer>
              </>:
              <>
                <LinkContainer to="/">
                  <Nav.Link  className='btn btn-outline-primary ms-2 px-4 rounded-pill'><BiHome/> Home</Nav.Link>
                </LinkContainer>
                <LinkContainer  to="/login" >
                  <Nav.Link  className='btn btn-outline-primary ms-2 px-4 rounded-pill'><BiLogIn/> Login</Nav.Link>
                </LinkContainer>
                <LinkContainer  to="/signup">
                  <Nav.Link className='btn btn-outline-primary ms-2 px-4 rounded-pill'><BiLogInCircle/> Signup</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/product">
                  <Nav.Link  className='btn btn-outline-primary ms-2 px-4 rounded-pill'><BiCart/> Products</Nav.Link>
                </LinkContainer>
              </>
            } 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/editproduct/:id' element={<EditProduct/>}/>
        <Route path='/userprofile' element={<Profile/>}/>
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
