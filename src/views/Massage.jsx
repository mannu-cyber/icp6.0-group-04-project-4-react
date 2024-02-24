import React from "react";
import 'remixicon/fonts/remixicon.css'
import { useHistory } from "react-router-use-history";
import imgdp from '../assets/dp/imgdp.jpg'





function Massage() {
  const home = useHistory('')
const handleHOme = ()=>{

  home.push('../home')
}



const harshal = useHistory('')
const handHarshal =  ()=>{

harshal.push('../harsaDm')

}



const arjun = useHistory(" ")
const handArjun = ()=>{

  arjun.push('/arjun')
}


const Vikrant = useHistory(" ")
const handvikrant = () => {
Vikrant.push('/vikrant')

}

  return (
    <div className="h-screen py-3 px-2">
      
<h1  className="mx-5 font-semibold text-lg flex gap-9 mt-9"><i onClick={handleHOme} className="ri-arrow-left-line text-[2vw] cursor-pointer"></i>Mannu.sahani_515 <i className="ri-arrow-down-s-line"></i></h1>
<div className="calls">
<h1 className="ms-9 mt-9 font-semibold">Chats</h1>


</div>
<hr className="mt-2" />

<div className="massage ">
<div onClick={handHarshal} className="harsal flex w-full p-7 gap-4 items-center cursor-pointer -my-3"> 
<div className="imgcontainer p-[3px] w-[70px] h-[70px] rounded-[50%] bg-red-500"><img className="rounded-[50%]" src={imgdp} alt="" /> </div>

<div className="name_massage flex flex-col"><h1 className="font-bold">Harshal</h1>
<h1 className="font-bold">2 new massages .  5h</h1>
</div>

</div>


<div onClick={handArjun} className="harsal flex w-full p-7 gap-4 items-center cursor-pointer -my-9">
<div className="imgcontainer w-[70px] h-[70px] rounded-[50%] bg-red-500"><img src="" alt="" /> </div>

<div className="name_massage flex flex-col"><h1 className="font-bold">Arjun</h1>
<h1 className="font-bold">2 new massages .  9m</h1>
</div>

</div>


<div onClick={handvikrant} className="harsal flex w-full p-7 gap-4 items-center cursor-pointer">
<div className="imgcontainer w-[70px] h-[70px] rounded-[50%] bg-red-500"><img src="" alt="" /> </div>

<div className="name_massage flex flex-col"><h1 className="font-bold">Vikrant</h1>
<h1 className="font-bold">2 new massages .  8m</h1>
</div>

</div>

</div>


    
    </div>
  );
}

export default Massage;
