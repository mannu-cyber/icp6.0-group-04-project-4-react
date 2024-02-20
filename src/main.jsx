import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Navbar from './views/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
< >

<div className="wrapper w-[500px] h-screen border">

<Navbar/>
<Home/>
</div>

</>
)
