import React from 'react';
import '../styles/Navbar.css'

export default function Navbar () {
  return (
    <div class="horizontal-navbar">
      <a class="navbar-logo" href="#home">
        <img src="https://noemptyseats.org/cdn/shop/files/image.jpg?v=1686603145&width=500" alt="No Empty Seats Logo" />
      </a>
      <div class="navbar-text">
        <a class="navbar-text" href="#collaborations">COLLABORATIONS</a>
        <a class="navbar-text" href="#outreach">OUTREACH</a>
        <a class="navbar-text" href="#stories">STORIES</a>
        <a class="navbar-text" href="#contactus">CONTACT</a>
      </div>
      
    </div>
  );
}