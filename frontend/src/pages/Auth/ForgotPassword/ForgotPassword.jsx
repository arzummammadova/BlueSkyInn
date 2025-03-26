import { useFormik } from 'formik';
import React from 'react'
import { schemaforgot } from '../../../validation/ForgotSchema';
import bgimage from '../../../assets/images/bgimagelogin.png';
import logo from '../../../assets/images/logo.png';
import Logo from '../../../components/logo/Logo';
const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema:schemaforgot,
  });
  return (
    <div className=" flex flex-col  justify-center gap-3 items-center h-screen bg-cover" style={{ backgroundImage: `url(${bgimage})` }}>
      
      <Logo/>
 <h1 className='text-3xl  pt-4 capitalize '>Forgot Your Password? No Worries!</h1>

      <div className="container mt-4 mx-auto px-6 flex flex-col items-center gap-6">
       <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-full max-w-[400px] justify-center items-center'> 
  
    <input
    placeholder='enter email address'
      id="email"
      name="email"
      className='border border-gray-300 w-full rounded px-4 py-2.5 focus:ring-2 focus:ring-blue-400 shadow-sm'
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />

    {formik.errors.email && formik.errors.email ? (
      <p className="text-red-400 text-sm">{formik.errors.email}</p>
    ) : null}
    <button className='border w-[70%] uppercase bg-(--bg-black) mt-4 text-(--text-color) rounded-xl py-1' type="submit">Send</button>
  </form>
  </div>
    </div>
   
  )
}

export default ForgotPassword
