import React, { useState } from 'react'
import Logo from '../../../components/logo/Logo'
import { Link } from 'react-router-dom'
import bgimage from '../../../assets/images/bgimagelogin.png'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useFormik } from 'formik'
import { schemaregister } from '../../../validation/RegisterSchems'
import google from '../../../assets/images/google.png'

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible)
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmpasswordVisible)

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
      tandc: false,
    },
    validationSchema: schemaregister,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className='p-6 bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <Logo />
        <h1 className='text-2xl font-semibold tracking-wide'>Welcome to BlueSkyInn</h1>

        <div className='flex gap-2 items-center border border-gray-300 rounded-3xl px-4 py-2 cursor-pointer'>
          <img className='w-5 h-5' src={google} alt="Google" />
          <p>Sign Up with Google</p>
        </div>

        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-full max-w-[400px]'>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address..."
            className="border border-gray-300 rounded px-4 py-2.5 focus:ring-2 focus:ring-blue-400 shadow-sm"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && <p className='text-red-400 text-sm'>{formik.errors.email}</p>}

          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            className="border border-gray-300 rounded px-4 py-2.5 focus:ring-2 focus:ring-blue-400 shadow-sm"
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username && <p className='text-red-400 text-sm'>{formik.errors.username}</p>}

          <div className="relative">
            <input
              id="password"
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter password..."
              className="border border-gray-300 rounded px-4 py-2.5 focus:ring-2 focus:ring-blue-400 shadow-sm w-full pr-10"
              {...formik.getFieldProps('password')}
            />
            <div onClick={togglePasswordVisibility} className="absolute right-3 top-3 cursor-pointer text-gray-500">
              {passwordVisible ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
            </div>
          </div>
          {formik.touched.password && formik.errors.password && <p className='text-red-400 text-sm'>{formik.errors.password}</p>}

          <div className="relative">
            <input
              id="confirmpassword"
              name="confirmpassword"
              type={confirmpasswordVisible ? 'text' : 'password'}
              placeholder="Enter password again..."
              className="border border-gray-300 rounded px-4 py-2.5 focus:ring-2 focus:ring-blue-400 shadow-sm w-full pr-10"
              {...formik.getFieldProps('confirmpassword')}
            />
            <div onClick={toggleConfirmPasswordVisibility} className="absolute right-3 top-3 cursor-pointer text-gray-500">
              {confirmpasswordVisible ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
            </div>
          </div>
          {formik.touched.confirmpassword && formik.errors.confirmpassword && <p className='text-red-400 text-sm'>{formik.errors.confirmpassword}</p>}

         
          <div className="flex items-center">
            <input
              id="tandc"
              name="tandc"
              type="checkbox"
              className="mr-2"
              checked={formik.values.tandc}
              onChange={formik.handleChange}
            />
            <p className='text-gray-500'>I agree to the <span className='text-black'>terms and conditions</span></p>
          </div>
          {formik.touched.tandc && formik.errors.tandc && <p className='text-red-400 text-sm'>{formik.errors.tandc}</p>}
        

          <p className='text-gray-500 text-center'>
            Already have an account? <Link to='/login' className="text-black ">Login now</Link>
          </p>

       
          <button type="submit" className="m-auto w-[85%] block bg-black hover:bg-gray-800 text-white py-3 rounded-xl text-center">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
