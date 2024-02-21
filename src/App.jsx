import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home'
import Match from "./views/Match";
import Navbar from "./components/Navbar";
import SignUp from "./views/Signup";
import Massage from "./views/Massage";
// import ThemeToggle from "./components/ThemeToggle";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path:'/match',
    element:<Match/>
  },
  {
    path:'/signup',
    element:<SignUp/>
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
<Home/>

     
    </RouterProvider>
  );
};

export default App;
