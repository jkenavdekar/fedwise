import React, { useState } from 'react';
import firebase from '../config/firebase';


  const Footer = () => {

    const [userName, setUserName] = useState({ name: '' });
    const [userEmail, setUserEmail] = useState({ email: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
      
    const clear = () => {
      setUserName({ name: '' });
      setUserEmail({ email: '' });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!isValidEmail) {
        return;
      }
  
      const name = userName.name;
      const email = userEmail.email;

      firebase.firestore().collection('leads').add({
        name,
        email,
      });
  
      clear();
  
      setIsSubmitted(true);
    };


  return (

    
<div id='section-1' class="overflow-hidden">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">

      <div class="text-center">
        <p class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
          Free Consultation
        </p>
        <h1 class="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
          Join the revolution
        </h1>
      </div>

      <div class="sm:flex sm:justify-center sm:items-center text-center sm:text-left">
        <div class="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pr-5">

          <div class="flex justify-center -space-x-3">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Image Description"/>
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
            <span class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-800 dark:bg-gray-900 dark:ring-gray-800">
              <span class="text-xs font-medium leading-none text-white uppercase">25+</span>
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div class="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
          <div class="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
            <label htmlFor="hs-hero-name-1" class="block text-sm font-medium dark:text-white"><span class="sr-only">Your name</span></label>
            <input type="text" id="name" class="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400" placeholder="Your name"
            value={userName.name} required onChange={ (e) => setUserName({ ...userName, name: e.target.value })} />
          </div>

          <div class="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] dark:border-gray-700">
            <label htmlFor="hs-hero-email-1" class="block text-sm font-medium dark:text-white"><span class="sr-only">Your email address</span></label>
            <input type="email" id="hs-hero-email-1" class="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400" placeholder="Your Email" 
            value={userEmail.email} required 
            onChange={ (e) => { setUserEmail({ ...userEmail, email: e.target.value }); 
                                const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
                                setIsValidEmail(isValid);}} />
          </div>
          
          <div class="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
            <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-4 dark:focus:ring-offset-gray-800">
              Get started
            </button>
          </div>

        </div>
      </form>
      {isSubmitted && (
                  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white rounded-md p-6 shadow-lg">
                      <p className="text-gray-800 font-bold text-lg mb-2">Thank You! Our team will get back to you asap.</p>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={() => setIsSubmitted(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
    </div>
  </div>
</div>
  )
}

export default Footer
