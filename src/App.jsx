import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home'
import Match from "./views/Match";
import Navbar from "./components/Navbar";
import SignUp from "./views/Signup";
import Massage from "./views/Massage";
import Login from "./views/Login";
import OtpVerification from "./views/OtpVerification";
import UserDashboard from "./views/UserDashboard";
import MainPage from "./components/MainPage/MainPage";

const router = createBrowserRouter([
  {
   path: '/MainPage' , element: <MainPage/>
  },
  { path: '/home', element: <Home /> },
  {
    path:'/match',
    element:<Match/>
  },
  {
    path:'/',
    element:<SignUp/>
  },
{
  path:'/login',
  element:<Login/>
},

{
  path:'user',
  element:<UserDashboard/>
},

{
  path:'/otpVerification',
  element:<OtpVerification/>
},

  {
    path:'/massage',
    element:<Massage/>
  }
  

]);

const App = () => {
  return (
    <RouterProvider router={router}>
    <Navbar/>
    <MainPage/>
<Home/>

     
    </RouterProvider>
  );
};

export default App;
