import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Match() {
  return (
    <div className='h-screen py-3 px-2 '>
    <Navbar/>

<h1 className='text-center mt-[20px] text-[2vw] font-cursive'>Find Your Match</h1>

<div className="card-container flex flex-col gap-5 w-full h-full items-center pt-9">



<div className="male w-[300px] h-[200px] bg-red-500 mx-auto"></div>
<div className="male w-[300px] h-[200px] bg-red-500 mx-auto"></div>

</div>



    <Footer/>
    </div>
  )
}

export default Match