import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useHistory } from "react-router-use-history";
// const navigate = useHistory('')
import '../../public/font.css'

function Match() {


// const nav = ()=>{
// navigate.push('./female')

// }

  return (
    <div className='h-[100vh] py-3 px-2 '>
    <Navbar/>

<h1 style={{fontFamily:'a'}} className='text-center mt-[20px] text-[2vw] '>Find Your Match......</h1>

<h2 style={{fontFamily:'a'}} className='text-center text-[1.5vw]'>Are You ?</h2>

<div className="card-container flex flex-col gap-5 w-full  items-center pt-9">



<div className="male w-[300px] h-[200px] hover:border hover:bg-[#FC7CB4] transition duration-200-4s mx-auto flex justify-center items-center flex-col">
  <img src="./male.png" alt="" />

  <h1  className='text-[2vw]'>Male</h1>
</div>
<div  className="male w-[300px] h-[200px] hover:border hover:bg-[#50C8EF]  mx-auto flex justify-center items-center flex-col">
  <img src="female.png" alt="" />
  <h1 className='text-[2vw]' >Female</h1>
</div>

</div>



    <Footer/>
    </div>
  )
}

export default Match