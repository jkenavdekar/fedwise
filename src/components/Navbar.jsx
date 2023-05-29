import React, { useState } from 'react';
import logo from '../assets/logo2.png';

const Navbar = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

<div class="bg-gradient-to-r from-purple-600 to-blue-400">
  <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <div class="flex justify-between items-center">
      <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="#">
        <img src={logo} class="h-[40px]" />
      </a>

      <div class="text-right">
        <p class="mr-5 inline-block text-sm font-semibold text-white">
          Ready to get started?
        </p>
        <button class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-white font-medium text-white hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" onClick={handleClickScroll}>
          Sign up
        </button>
      </div>

    </div>
  </div>
</div>


  )
}

export default Navbar