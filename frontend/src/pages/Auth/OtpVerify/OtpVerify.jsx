import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import bgimage from '../../../assets/images/bgimagelogin.png';
import mail from '../../../assets/images/mail.png';
import { otpSchema } from '../../../validation/OtpSchema';



const OtpVerify = () => {
  const inputRefs = useRef([]);

  const handleChange = (e, setFieldValue, values) => {
    const value = e.target.value;
    const index = parseInt(e.target.name.split('-')[1]);
    
    if (isNaN(value)) return;
    let newOtp = values.otp.split('');
    newOtp[index] = value;
    setFieldValue("otp", newOtp.join(""));
    
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center px-4" style={{ backgroundImage: `url(${bgimage})` }}>
      <img src={mail} className='w-[120px] h-[120px] mb-4' alt="mail" />
      <h1 className='text-3xl font-bold text-black'>Verify OTP</h1>
      <p className='text-gray-500 text-sm mb-6'>Enter the 6-digit OTP sent to your email</p>
      
      <Formik
        initialValues={{ otp: "" }}
        validationSchema:otpSchema
        onSubmit={(values) => {
          alert("OTP Submitted: ", values.otp);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="flex flex-col items-center">
            <div className='flex gap-3'>
              {[...Array(6)].map((_, index) => (
                <Field
                  key={index}
                  innerRef={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  name={`otp-${index}`}
                  maxLength="1"
                  className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-500 rounded-lg outline-none focus:border-[#00DC64] transition-all bg-white/80 backdrop-blur-sm"
                  onChange={(e) => handleChange(e, setFieldValue, values)}
                />
              ))}
            </div>
            <ErrorMessage name="otp" component="div" className="text-red-500 mt-2 text-sm" />
            <button type="submit" className="mt-6 bg-(--color-secondary) text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-lg hover:bg-(--color-secondary) transition-all">Verify</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OtpVerify;