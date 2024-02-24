import React from "react";
import "remixicon/fonts/remixicon.css";
import imgdp from '../assets/dp/imgdp.jpg'
import {useHistory } from "react-router-use-history";

function HarasaDm() {

  const home = useHistory('')
const handleback = ()=>{

  home.push('../massage')
}




  return (
    <div className="w-full h-screen px-8 py-[2vw] ">
      <header className=" flex items-center font-light gap-1">
        <i onClick={handleback} className="ri-arrow-left-s-line text-[4vw]"></i>
        <div className="dpName w-[70px] h-[70px] rounded-[50%] overflow-hidden">
          <img src={imgdp} alt="" />
        </div>

        <div className="nam-active flex flex-col">

        <h1 className="font-bold">Harshal</h1>
        <h2>Active Now</h2>

        </div>
      </header>
      <  hr className='my-5' />

<div className="mma ms-[50px] flex flex-col gap-1">
  <h1 className="bg-zinc-200 inline-block rounded-[20px] py-2 px-9" >hi</h1>
<h1 className="bg-zinc-200 inline-block rounded-[20px] py-2 px-9" >bhai project ka kya hua</h1>
<h1 className="bg-zinc-200 inline-block rounded-[20px] py-2 px-9" >aaj hi demo hai na?</h1>


</div>
<div className="massage w-[40px] h-[40px] rounded-[50%] overflow-hidden">

<div className="imgcont"><img src={imgdp} alt="" /></div>

</div>


<div className="mymassag flex end"><h1 className="text-right bg-gradient-to-r from-purple-600 to-blue-600 inline-block rounded-[20px] py-2 px-9">almost hone wala hia</h1></div>

<div className="massage-send fixed bottom-9 h-[30px]  flex w-[450px] justify-between border">
<input className=" rounded-3xl w-full border-black" type="text" />

<button className="py-[10px] bg-blue-600 px-[30px] flex items-center rounded-[20px] text-white" type="button"> Send</button>
</div>
    </div>
  );
}

export default HarasaDm;
