import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 const title = {
  border:'4px solid black',
  margin:'50px',
  height:'350px',
  display:'flex',
  marginTop:'90px'
}
const size = {
  height:'740px',
  
}
const Headers = {
  fontsize:'80px',
  color: 'red',
  marginleft:'90px',
 
}
const line ={
  borderradius:'12px',
  padding:'20px',
  width:'90px',
 height:'250px',
 bordercolor:'aqua',
 margin:'20px', 
 marginleft:'25px' 
}
const main ={
  border:'1px solid #ccc',
  borderradius:'5px',
  padding:'20px',
  width:'500px',
 height:'550px',
}
const eye ={
  height:'25px',
  width:'25px',
  margin:'5px'

}
const profile ={
  height:'240px',
  width:'440px',
  marginTop:'20px',
  marginRight:'20px',
  backgroundColor:'red',
  border:'1px solid #ccc',
  borderradius:'5px',
  boxShadow: '0 0 10px tomato'
}
const match={
height:'40px',
width:'210px',
  borderRadius:'12px',
  backgroundColor:'#1E90FF', 
  textAlign:'center',
  border:'2px solid black',
 color:'white'
}
const text={
fontSize:'25px',
color:'ccc',
}
function Female() {
  return (
    <div style={size}> 
        <Navbar/>
        <div style={main}>
        <div style={title}>
        
 
        <div style={line}>
      <button style={eye}><img src='eye.png'></img></button>
      <button style={eye}><img src='like.png'></img></button>
      <button style={eye}><img src='msg.png'></img></button>
      <button style={eye}><img src='save.png'></img></button>
      <button style={eye}><img src='share.png'></img></button>
      </div>
         <div style={profile}>
         <img src='girl1.jpg'></img>
          <div/>
          <div style={match}>
          <button style={text}>&nbsp;MATCH</button></div>
          </div>
          </div>
         <Footer/>
         </div>
        </div>
  )
}

export default Female