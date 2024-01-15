/** @format */

// src/components/Rectangle.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWpforms } from "react-icons/fa"; // Import the form icon

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
        className='rounded bg-primary p-4 m-4 text-light rectangle-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.05,
          zIndex: 1,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        onClick={link ? redirectNotification : null}>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <img src={imageUrl} alt={headline} className='w-20 h-auto mr-4' />
            <div>
              <h2 className='text-2xl font-bold mb-2'>{headline}</h2>
              <a
                href={link || applicationLink}
                className='text-blue-500 hover:underline hover:text-blue-700 flex items-center'
                target='_blank'
                rel='noopener noreferrer'>
                <FaWpforms className='mr-1' />{" "}
                {link ? "Discord Server" : "In-game Staff Application"}
              </a>
            </div>
          </div>
        </div>
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
