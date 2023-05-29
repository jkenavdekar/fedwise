import React from 'react';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';

const Hero = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<div class="relative overflow-hidden h-screen">

  <div aria-hidden="true" class="flex absolute -top-96 left-1/2 transform -translate-x-1/2">
    <div class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
    <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
  </div>


  <div class="relative z-10 flex flex-col justify-center items-center h-full">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div class="max-w-2xl text-center mx-auto">
        <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          Build a Robust & Bias free ML models
        </p>


        <div class="mt-5 max-w-2xl">
          <h1 class="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Bring the power of Federated learning to your private data
          </h1>
        </div>


        <div class="mt-5 max-w-3xl">
          <p class="text-lg text-gray-600 dark:text-gray-400">At FedWise we are developing a robust fraud detection system using decentralized collaborative training with the network of financial institutions.</p>
        </div>


        <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
          <button onClick={handleClickScroll} class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="javascript:;">
            Get started
            <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <Link to="/blog" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-900 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
          <img src={logo} class="w-4 h-4" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" />
            Learn more
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero