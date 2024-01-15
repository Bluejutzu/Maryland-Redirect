/** @format */

// src/App.js
import React from "react";
import Rectangle from "./components/Rectangle";
import Background from "./components/Background";
import { FaWpforms } from "react-icons/fa"; // Import the form icon

const App = () => {
  return (
    <div className='bg-gray-100 text-dark text-center relative'>
      <nav className='bg-primary p-2 text-light'>
        <a href='/applications' className='mr-4'>
          Applications
        </a>
        <a href='/about-us' className='mr-4'>
          About Us
        </a>
        <a href='/msrp-team'>MSRP Team</a>
      </nav>
      <Background />
      <div className='container py-5'>
        <h1 className='display-4 font-weight-bold mb-4 text-primary'>
          Roleplay Server Home
        </h1>
        <div className='d-flex flex-column align-items-center'>
          <Rectangle
            headline='Maryland State Roleplay'
            imageUrl='https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg'
            link='https://discord.gg/aSKMehUwcE'
            applicationLink='https://example.com/discord-mod-application'
          />
          <Rectangle
            headline='ER:LC'
            imageUrl='https://static.wikia.nocookie.net/robloxcities/images/5/58/Libertycounty.png/revision/latest?cb=20220112073447'
            link='https://docs.google.com/forms/d/e/1FAIpQLSdvp-Qr3UHRPVw8ttR2HA5tJb2n84WJNSv4HKr6e8PLC6AguQ/viewform'
            applicationLink='https://example.com/in-game-staff-application'
          />
        </div>
      </div>
    </div>
  );
};

export default App;
