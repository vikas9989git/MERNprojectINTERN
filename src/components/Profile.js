import React from 'react'
import { useSelector } from 'react-redux'
import Products from './Product/Products'
function Profile() {
    let {userObj}=useSelector(state=>state.userLogin)
  return (
    <div>
        <h4 className='test-start text-info fw-bold'>welcome {userObj.username}</h4>
        <Products/>
    </div>
  )
}

export default Profile