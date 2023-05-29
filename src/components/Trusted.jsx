import React from 'react'
import hf from '../assets/huggingface.png';
import tf from '../assets/tensorflow.png';
import pt from '../assets/pytorch.png';
import all from '../assets/all-tech.png';

const Trusted = () => {
  return (

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
    <h2 class="text-gray-600 dark:text-gray-400">Our Technology Stack</h2>
  </div>


  <div class="flex justify-center">
    <img src={all} class="max-w-full h-auto sm:max-w-screen-lg sm:w-auto" />
  </div>

</div>

  )
}

export default Trusted
