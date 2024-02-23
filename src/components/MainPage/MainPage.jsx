import { Component } from "react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';


import Stack from '@mui/material/Stack';

import "./MainPage.css"
import Img1 from "/src/components/images/img1.jpg";
import Bottom from "../bottom";
import cardData from '../Data/cardData'

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

      <div className="h-screen   flex overflow-hidden">

        <div className="w-[20%] bg-white"></div>

        <div className= " bg-slate-100 border-2 overflow-scroll scrollbar-hide rounded" style={{width:'auto'}}>

          <div className="bg-white h-[70px]"></div>

          {
             
             Array.from({ length: 100 }, (_, index) =>{

              const item = index + 1;
               const card = cardData[item - 1];
                return(
                    <div key={item} className="bg-white   mx-auto mt-[30px] p-8 rounded-lg" >
            <div className="border-b flex items-center pb-8">
              <Avatar alt={card.name} src={card.avatarSrc} />
              <div className="ml-4">
                <h3 className="font-medium">{card.name}</h3>
                <p>@{card.username}</p>
              </div>
            </div>

            <div className="border b pb-4 ">
              <img src={card.imageSrc}></img>
            </div>

            <div className="flex justify-evenly mt-5 font-medium">
              <div className="flex items-center">
                <img src="https://cdn.hugeicons.com/icons/favourite-stroke-rounded.svg" alt="favourite" width="24" height="24" />
                <span className="ml-2">{card.likes} Like</span>
              </div>
              <div className="flex items-center text-justify">
                <img src="https://cdn.hugeicons.com/icons/bubble-chat-delay-stroke-rounded.svg" alt="bubble-chat-delay" width="24" height="24" />
                <span className="ml-2">Comment</span>
              </div>
              <div className="flex items-center">
                <img src="https://cdn.hugeicons.com/icons/share-01-stroke-rounded.svg" alt="share-01" width="24" height="24" />
                <span className="ml-2">Share</span>
              </div>
            </div>
            </div>

                )
             })


          }
          
          
          
          

        </div>

        <div className="w-[20%] bg-white"></div>

        
         





      </div>

    
    );
  }
}

export default MainPage