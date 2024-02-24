import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const cardData = [
  {
    id: 1,
    username: '@Dhanuu_kale_23',
    bio: 'cat lover....😻',
    image: '10.jpg',
    likes: 1100,
  },
  {
    id: 2,
    username: '@Sukanya_Anbhule',
    bio: 'passion computer.💻',
    image: 'mst.jpg',
    likes: 1100,
  },
  {
    id: 3,
    username: '@The_Sky',
    bio: 'Nature lover...🏞️',
    image: 'why1.jpg',
    likes: 1100,
  },
  {
    id: 4,
    username: '@Black_Beery',
    bio: 'world tour...🚗',
    image: 'sari4.jpg',
    likes: 100,
  },
  {
    id: 5,
    username: '@its_Really_prachuuu',
    bio: 'Bappa lover...🙏',
    image: 'jins1.jpg',
    likes: 1200,
  }
  // Add more card data objects as needed
];

const size = {
  height: '840px',
};

const main = {
  border: '1px #ccc',
  borderRadius: '3px',
  padding: '20px',
  width: '500px',
  height: '650px',
  overflow: 'auto',
};

const match = {
  height: '40px',
  width: '170px',
  borderRadius: '12px',
  backgroundColor: '#1E90FF',
  textAlign: 'center',
  border: 'none',
  color: 'white',
  marginLeft: '25px',
  marginTop: '20px',
  marginRight: '15px',
};

const text = {
  fontSize: '25px',
  color: 'ccc'
};

const username = {
  fontSize: '25px'
};

function Female() {
  const [matched, setMatched] = useState(false);

  const handleMatchClick = () => {
    setMatched(!matched); // Toggle the matched state
  };

  return (
    <div style={size}>
      <Navbar />
      <div style={main}>
        {cardData.map((card) => (
          <div key={card.id} style={{ border: matched ? '1px solid #ccc' : 'none', height: '410px', display: 'flex', borderRadius: '10px', width: '410px', marginLeft: '25px' }}>
            <div style={{ borderRadius: '12px', padding: '40px', width: '90px', height: '260px', borderColor: 'aqua', margin: '3px', marginTop: '60px' }}>
              <button style={{ height: '25px', width: '25px', margin: '2px' }}><img src='like.png' alt="Like"></img><h5>{card.likes}</h5></button>
              <button style={{ height: '25px', width: '25px', margin: '2px' }}><img src='eye.png' alt="Eye"></img></button>
              <button style={{ height: '25px', width: '25px', margin: '2px' }}><img src='msg.png' alt="Message"></img></button>
              <button style={{ height: '25px', width: '25px', margin: '2px' }}><img src='share.png' alt="Share"></img></button>
              <button style={{ height: '25px', width: '25px', margin: '2px' }}><img src='save.png' alt="Save"></img></button>
            </div>
            <div style={{ height: '100px', width: '240px', marginTop: '20px', marginRight: '20px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px' }}>
              <img src={card.image} alt="Profile"></img>
              <div />
              <h1 style={username}>{card.username}</h1>
              <h1>{card.bio}</h1>
              <div style={{...match, backgroundColor: matched ? 'Green' : '#1E90FF'}} onClick={handleMatchClick}>
                <button style={{...text, color: matched ? 'black' : 'white'}}>&nbsp;{matched ? 'Requested' : 'Match'}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Female;
