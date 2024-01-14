/** @format */

// src/components/Rectangle.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Rectangle = ({ headline, imageUrl, link, applicationLink }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const notificationVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };

  const redirectNotification = () => {
    // Simulate redirection logic (replace with actual redirection logic)
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = link || applicationLink;
    }, 2000);
  };

  return (
    <div className='relative'>
      <motion.div
        className='rounded-md bg-primary p-8 m-4 text-primary-content rectangle'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        onClick={link ? redirectNotification : null}>
        <div className='flex items-center'>
          <img src={imageUrl} alt={headline} className='w-10 h-10 mr-4' />
          <h2 className='text-2xl font-bold'>{headline}</h2>
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
            className='absolute top-1 right-1 bg-primary-dark text-primary-content p-4 rounded-md notification'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={notificationVariants}>
            Redirecting to{" "}
            {link ? "Discord Server" : "In-game Staff Application"}...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Rectangle;
