import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home'
import Match from "./views/Match";
import Navbar from "./components/Navbar";
// import ThemeToggle from "./components/ThemeToggle";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path:'/match',
    element:<Match/>
  },
  // {
  //   path:'/login',
  //   element:<Login/>
  // },
  

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
