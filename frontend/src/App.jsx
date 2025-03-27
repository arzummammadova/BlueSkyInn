import React from 'react'
import Layout from './components/layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import OtpVerify from './pages/Auth/OtpVerify/OtpVerify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: "/",
        element: <Home/>,
      },
      {
        path: 'rooms',
        element: <Rooms />,
      },
    ],
    
  },
  {
    path:"/login",
    element : <Login/>
  },
  {
    path:"/register",
    element : <Register/>
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path:'/forgotpassword',
    element:<ForgotPassword/>
  }
  ,
  {
    path:'/resetpassword',
    element:<ResetPassword/>
  },
  {
    path:'/otp-verify',
    element:<OtpVerify/>
  }
]);
const App = () => {
  return <RouterProvider router={router} />
}

export default App
