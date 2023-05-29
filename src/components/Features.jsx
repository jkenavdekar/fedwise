import React from 'react'

const Features = () => {
  return (

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
    <div class="lg:col-span-5 lg:col-start-1">

      <div class="mb-8">
        <h2 class="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl dark:text-gray-200">
          Unlock new possibilities
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
        "Privacy-preserving machine learning techniques like federated learning allow us to build powerful AI models without sacrificing the privacy of individual users. By keeping data local and bringing the computation to the data, we can unlock the potential of decentralized data while respecting user privacy."
        </p>
      </div>

      {/*
      <blockquote class="relative">
        <footer class="mt-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
            </div>
            <div class="grow ml-4">
              <div class="font-semibold text-gray-800 dark:text-gray-200">Andrew Ng</div>
              <div class="text-xs text-gray-500">Director of Ai</div>
            </div>
          </div>
        </footer>
      </blockquote>*/}

    </div>


    <div class="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
      <div class="space-y-6 sm:space-y-8">
        <ul class="grid grid-cols-2 divide-y divide-x divide-gray-200 overflow-hidden dark:divide-gray-700">
          <li class="flex flex-col -m-0.5 p-4 sm:p-8">
            <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
              GDPR
            </div>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              FL reduces the need to transfer and process personal data, thereby minimizing potential GDPR risks
            </p>
          </li>

          <li class="flex flex-col -m-0.5 p-4 sm:p-8">
            <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
              <svg class="w-4 h-4 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z" fill="currentColor"/>
              </svg>
              36 Billion
            </div>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              In 2020, 36 billion records were exposed in data breaches globally, highlighting the need for robust privacy measures
            </p>
          </li>

          <li class="flex flex-col -m-0.5 p-4 sm:p-8">
            <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
              <svg class="w-4 h-4 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z" fill="currentColor"/>
              </svg>
              75%
            </div>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              It is projected that by 2025, 75% of enterprise-generated data will be processed at the edge
            </p>
          </li>

          <li class="flex flex-col -m-0.5 p-4 sm:p-8">
            <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
              10x
            </div>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Smaller memory footprint for Edge AI
            </p>
          </li>
        </ul>

      </div>
    </div>

  </div>

</div>

  )
}

export default Features
