import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './views/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
< >

<div className="wrapper w-[500px] h-screen border">

<Navbar/>
<Home/>
<Footer/>
</div>

</>
)
