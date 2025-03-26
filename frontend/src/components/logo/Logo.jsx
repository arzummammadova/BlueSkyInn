import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <div>
      <Link to="/">

        <img src={logo} alt="logo" />
        </Link>
    </div>
  )
}

export default Logo
