import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home'

import Navbar from "./components/Navbar";
// import ThemeToggle from "./components/ThemeToggle";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  // Add more routes as needed
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
