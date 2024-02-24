// import React from 'react'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import pen from '../components/images/pen.png'
import './UserDashboard.css'

function UserDashboard() {
  const [name, setName] = useState("John");

    const [email, setEmail] = useState("john@gmail.com");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("9876543211");
    const [bio, setBio]= useState("I am an Artist...!");
    // const history = useHistory();

const handle= () => {
    const storedName = localStorage.getItem("userName");
  const storedEmail = localStorage.getItem("userEmail");
  const storedMobile = localStorage.getItem("userMobile");
  const storedBio = localStorage.getItem("userBio");

  document.getElementById("name").innerHTML = setName;
}
  
  return (
    <div className='border h-screen py-3 px-2'>
<Navbar/>
<div className="profile-card">
            <h1 className='title'>User Profile/Dashboard</h1>
            <div>
                <img src="https://i.pravatar.cc/150?img=32" alt="image" className='profile-image'/>
                <img src={pen} alt="" className='edit-icon'/>
            </div>
            <div className='profile-info'>
                <p id='name'>UserName :</p>
                <p><b>johnAlice</b></p>
                <p id='email'>Email :</p>
                <p><b>john@gmail.com</b></p>
                <p id='mobile'>Mobile :</p>
                <p><b>987654231</b></p>
                <p id='bio'>Bio :   </p>
                <p><b>An artist...Fond of painting!</b></p>
            </div>
            <div className='btn-container'>
            <button className='button' id='edit-btn' type='submit'>Edit Profile</button>
            <button className='button' id='save-btn' type='submit'>Save</button>
            </div>

        </div>
<Footer/>
    </div>
  )
}

export default UserDashboard