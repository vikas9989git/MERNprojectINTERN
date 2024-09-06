import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nomatch() {
  let navigate=useNavigate();
  return (
    <div>
        <h1 className=' text-center display-3 text-warning fw-semibold mt-5'>No path found</h1>
        <button onClick={navigate('/')} className='btn btn-outline-danger'>Go back to Home</button>
    </div>
  )
}

export default Nomatch