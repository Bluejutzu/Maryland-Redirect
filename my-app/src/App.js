/** @format */

// src/App.js
import React from "react";
import Rectangle from "./components/Rectangle";
import marylandImage from "./images/msrp_logo.svg";
import lcImage from "./images/Libertycounty.webp";

const App = () => {
  return (
    <div className='bg-light text-dark text-center'>
      <div className='container py-5'>
        <h1 className='display-4 font-weight-bold mb-4 text-primary'>
          Roleplay Server Home
        </h1>
        <div className='d-flex flex-column align-items-center'>
          <Rectangle
            headline='Maryland State Roleplay'
            imageUrl={marylandImage}
            link='https://discord.gg/aSKMehUwcE'
            applicationLink='https://example.com/discord-mod-application'
          />
          <Rectangle
            headline='ER:LC'
            imageUrl={lcImage}
            link='https://docs.google.com/forms/d/e/1FAIpQLSdvp-Qr3UHRPVw8ttR2HA5tJb2n84WJNSv4HKr6e8PLC6AguQ/viewform'
            applicationLink='https://example.com/in-game-staff-application'
          />
        </div>
      </div>
    </div>
  );
};

export default App;