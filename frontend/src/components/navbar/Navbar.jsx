import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="container mx-auto px-6">
      <nav className='navbar flex justify-between items-center '>

        <div className="logo">
          <Link to='/'>
          <img src={logo} alt="logo" />
          </Link>
          
        </div>



        <div className="nav-links ">
          <ul className='flex  gap-3'>
            <li className='nav-links-item'>Home</li>
            <li className='nav-links-item'>Home</li>
            <li className='nav-links-item'>Home</li>
            <li className='nav-links-item'>Home</li>
          </ul>
         
        </div>
        <div className="actions gap-2 flex">
        
          {/* <button className='btn btn-primary '>Login/Sign up</button>
          <button className='btn btn-secondary'>Sign Up</button> */}
       
          <Link to ='/login' className='btn bg-(--color-primary) transition hover:bg-(--color-secondary) text-(--text-color) py-2 px-5 rounded-3xl'>Sign Up</Link>
        </div>


      </nav>
    </div>

  )
}

export default Navbar
