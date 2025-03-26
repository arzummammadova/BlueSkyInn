import React, { useState } from 'react';
import Logo from '../../../components/logo/Logo';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import bgimage from '../../../assets/images/bgimagelogin.png'; 
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { schemalogin } from '../../../validation/LoginSchema';
import google from '../../../assets/images/google.png';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const formik = useFormik({
    initialValues: {
      identifier: '', 
      password: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: schemalogin,
  });

  return (
    <div className="h-screen bg-cover flex items-center justify-center" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <Logo />
        <h1 className="text-center font-semibold tracking-[0.3em] uppercase text-2xl">Welcome back</h1>

        <div className="google">
          <div className='flex gap-2 items-center border border-gray-300 rounded-3xl px-4 py-2 cursor-pointer'>
            <img className='w-[20px] h-[20px]' src={google} alt="" />
            <p>Sign In with Google</p>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full max-w-[400px]">
      
          <input
            id="identifier"
            name="identifier"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.identifier}
            type="text"
            placeholder="Enter email or username..."
            className="input border-gray-300 shadow-md rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.identifier && formik.errors.identifier ? (
            <p className="text-red-400 text-sm">{formik.errors.identifier}</p>
          ) : null}

        
          <div className="relative">
            <input
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter your password"
              className="input border-gray-300 shadow-md rounded px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute right-5 top-3 cursor-pointer text-gray-500" onClick={togglePasswordVisibility}>
              {passwordVisible ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-400 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

           <p className='text-xs  '>Forgot password?<Link to='/forgotpassword' className='text-(--color-secondary)'>Change now</Link> </p>
          <p className="text-center text-gray-500">
            Didn’t have an account? <Link to='/register' className="text-(--bg-black) cursor-pointer">Register now</Link>
          </p>

       
          <button type="submit" className="btn bg-black hover:bg-gray-800 uppercase text-white w-[85%] m-auto py-3 rounded-xl">
            Login
          </button>
        </form>
      </div>  
    </div>
  );
};

export default Login;
