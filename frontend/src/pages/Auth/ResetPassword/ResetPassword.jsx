import { useFormik } from 'formik';
import React, { useState } from 'react'
import bgimage from '../../../assets/images/bgimagelogin.png';
import Logo from '../../../components/logo/Logo';
import { schemaResetPassword } from '../../../validation/ResetPassword';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const ResetPassword = () => {

  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmpassword: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: schemaResetPassword,
  });

  return (
    <div className="flex flex-col justify-center gap-3 items-center h-screen bg-cover" style={{ backgroundImage: `url(${bgimage})` }}>
      <Logo />
      <h1 className='text-3xl pt-4 capitalize'>Enter new password</h1>

      <div className="container mt-4 mx-auto px-6 flex flex-col items-center gap-6">
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-full max-w-[400px] justify-center items-center'>

          {/* Password Input */}
          <div className="relative w-full">
            <input
              placeholder='Enter new password'
              id="password"
              name="password"
              className='border border-gray-300 w-full rounded px-4 py-2.5 focus:ring-2 focus:ring-blue-400 shadow-sm'
              type={passwordVisible ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="absolute right-5 top-3 cursor-pointer text-gray-500" onClick={togglePasswordVisibility}>
              {passwordVisible ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
            </div>
          </div>

          {formik.errors.password ? (
            <p className="text-red-400 text-sm text-left w-full">{formik.errors.password}</p>
          ) : null}

          {/* Confirm Password Input */}
          <div className="relative w-full">
            <input
              placeholder='Confirm password'
              id="confirmpassword"
              name="confirmpassword"
              className='border border-gray-300 w-full rounded px-4 py-2.5 focus:ring-2 focus:ring-blue-400 shadow-sm'
              type={confirmPasswordVisible ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />
            <div className="absolute right-5 top-3 cursor-pointer text-gray-500" onClick={toggleConfirmPasswordVisibility}>
              {confirmPasswordVisible ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
            </div>
          </div>

          {formik.errors.confirmpassword ? (
            <p className="text-red-400 text-sm text-left w-full">{formik.errors.confirmpassword}</p>
          ) : null}

          <button className='border w-[70%] uppercase bg-black text-white mt-4 rounded-xl py-1' type="submit">Change</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
