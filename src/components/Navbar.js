import React from 'react';
import '../styles/Navbar.css'

export default function Navbar () {
  return (
    <div class="horizontal-navbar">
      <a class="navbar-logo" href="#home">
        <img src="https://noemptyseats.org/cdn/shop/files/image.jpg?v=1686603145&width=500" alt="No Empty Seats Logo" />
      </a>
      <div class="navbar-text">
        <a class="navbar-text" href="#collaborations">Collaborations</a>
        <a class="navbar-text" href="#outreach">Outreach</a>
        <a class="navbar-text" href="#stories">Stories</a>
        <a class="navbar-text" href="#contactus">Contact Us</a>
      </div>
      
    </div>
  );
}