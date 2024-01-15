/** @format */

// src/components/Rectangle.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Rectangle = ({ headline, imageUrl, link, applicationLink }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectNotification = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = link || applicationLink;
    }, 2000);
  };

  return (
    <div className='position-relative'>
      <motion.div
        className='rounded bg-primary p-4 m-4 text-light rectangle'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={link ? redirectNotification : null}>
        <div className='d-flex align-items-center'>
          <img src={imageUrl} alt={headline} className='w-25 h-25 mr-3' />
          <h2 className='text-2xl font-weight-bold'>{headline}</h2>
        </div>
        <a
          href={link || applicationLink}
          target='_blank'
          rel='noopener noreferrer'>
          {link ? "Discord Server" : "In-game Staff Application"}
        </a>
      </motion.div>

      <AnimatePresence>
        {isRedirecting && (
          <motion.div
            className='position-absolute top-0 end-0 bg-primary text-light p-4 rounded notification'
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}>
            Redirecting to{" "}
            {link ? "Discord Server" : "In-game Staff Application"}...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Rectangle;
