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
    this.state = {
      likedCards: new Set(), 
    };
  }

  handleLikeClick = (index) => {
    this.setState((prevState) => {
      const likedCards = new Set(prevState.likedCards);
      if (likedCards.has(index)) {
        likedCards.delete(index); // Remove if already liked
      } else {
        likedCards.add(index); // Add if not liked
      }
      return { likedCards };
    });
  };


  render() {
    const { likedCards } = this.state;

    return (

      <div className="h-screen   flex overflow-hidden">

        <div className="w-[20%] bg-white"></div>

        <div className= " scroll-py-2.5 bg-slate-100 border-2 overflow-scroll scrollbar-hide rounded" style={{width:'auto'}}>

          <div className="bg-white h-[70px]"></div>

          {
             
             Array.from({ length: 100 }, (_, index) =>{

              const item = index + 1;
               const card = cardData[item - 1];
               const isLiked = likedCards.has(item);

                return(
                    <div key={item} className="bg-white   mx-auto mt-[30px] p-8 rounded-lg" >
            <div className="border-b flex items-center pb-8">
              <Avatar alt={card.name} src={card.avatarSrc} />
              <div className="ml-4">
                <h3 className="font-medium">{card.name}</h3>
                <p>@{card.username}</p>
              </div>
            </div>

            <div className="border-2 rounded  b pb-4 ">
              <img src={card.imageSrc}></img>
            </div>

            <div className="flex justify-evenly mt-5 font-medium">
              <div className="flex items-center"  onClick={() => this.handleLikeClick(item)}>
             {isLiked ? (
                      <svg className="heart-icon red-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    ) : (
                      <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                <span className="ml-2">{isLiked ? 'Like' : 'Like'}</span>
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