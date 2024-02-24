import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import imgdp from '../assets/dp/imgdp.jpg'
import { useHistory } from "react-router-use-history";

function HarasaDm() {
  const home = useHistory('');
  
  const handleBack = () => {
    home.push('../massage');
  };

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="w-full h-screen px-8 py-[2vw] ">
      <header className="flex items-center font-light gap-1">
        <i onClick={handleBack} className="ri-arrow-left-s-line text-[4vw]"></i>
        <div className="dpName w-[70px] h-[70px] rounded-[50%] overflow-hidden">
          <img src={imgdp} alt="" />
        </div>
        <div className="nam-active flex flex-col">
          <h1 className="font-bold">Harshal</h1>
          <h2>Active Now</h2>
        </div>
      </header>
      <hr className='my-5' />

<h1 >hi</h1>
<h1>project hua kya</h1>
<h1 className="mb-3">aaj hi hai na demo</h1>
<img className="w-[40px] h-40px rounded-[50%]" src={imgdp} alt="" />


<div className="mera flex justify-end mb-1">

<h1 className="bg-gradient-to-r from-purple-600 to-blue-600 inline-block rounded-[20px] py-2 px-9 text-white text-right">han</h1>
</div>

      <div className="mma ms-[50px] flex flex-col gap-1">
        {messages.map((message, index) => (
          <h1 key={index} className="bg-gradient-to-r from-purple-600 to-blue-600 inline-block rounded-[20px] py-2 px-9 text-white  ">{message}</h1>
        ))}
      </div>

      <div className="massage-send fixed bottom-9 h-[30px]  flex w-[450px] justify-between border gap-2">
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="rounded-3xl w-full border-black px-9"
          type="text"
          placeholder="type your message"
        />
        <button
          onClick={handleSendClick}
          className="py-[10px] bg-blue-600 px-[30px] flex items-center rounded-[20px] text-white"
          type="button"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default HarasaDm;
