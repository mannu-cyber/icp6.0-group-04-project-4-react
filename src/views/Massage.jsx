import React from "react";
import 'remixicon/fonts/remixicon.css'
import { useHistory } from "react-router-use-history";



function Massage() {
  const home = useHistory('')
const handleHOme = ()=>{

  home.push('../home')
}

  return (
    <div className="h-screen py-3 px-2">
      
<h1  className="mx-5 font-semibold text-lg flex gap-9 mt-9"><i onClick={handleHOme} className="ri-arrow-left-line text-[2vw] cursor-pointer"></i>Mannu.sahani_515 <i className="ri-arrow-down-s-line"></i></h1>
<div className="calls">
<h1 className="ms-9 mt-9 font-semibold">Chats</h1>


</div>
<hr className="mt-2" />

<div className="massage">
<div className="harsal flex w-full p-7 gap-4 items-center ">
<div className="imgcontainer w-[70px] h-[70px] rounded-[50%] bg-red-500"><img src="" alt="" /> </div>

<div className="name_massage flex flex-col"><h1 className="font-bold">Harshal</h1>
<h1 className="font-bold">2 new massages .  5h</h1>
</div>

</div>


<div className="harsal flex w-full p-7 gap-4 items-center ">
<div className="imgcontainer w-[70px] h-[70px] rounded-[50%] bg-red-500"><img src="" alt="" /> </div>

<div className="name_massage flex flex-col"><h1 className="font-bold">Arjun</h1>
<h1 className="font-bold">2 new massages .  9m</h1>
</div>

</div>


<div className="harsal flex w-full p-7 gap-4 items-center ">
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
