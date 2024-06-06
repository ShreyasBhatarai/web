import React  from "react";
 
export default function Price(){
    return(
    <>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-7">

  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Pricing</h2>
    <p class="mt-1 text-gray-600 dark:text-neutral-400">Whatever your status, our offers evolve according to your needs.</p>
  </div>


  <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
     
    <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
      <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">Free</h4>
      <span class="mt-7 font-bold text-5xl text-gray-800 dark:text-neutral-200">Free</span>
      <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">Forever free</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            1 user
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600" href="#">
        Sign up
      </a>
    </div>


     
    <div class="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
      <p class="mb-3"><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">Most popular</span></p>
      <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">Startup</h4>
      <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
        <span class="font-bold text-2xl -me-2">$</span>
        39
      </span>
      <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">All the basics for starting a new business</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            2 users
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
        Sign up
      </a>
    </div>
    

     
    <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
      <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">Team</h4>
      <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
        <span class="font-bold text-2xl -me-2">$</span>
        89
      </span>
      <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">Everything you need for a growing business</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            5 users
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600" href="#">
        Sign up
      </a>
    </div>
   

     
    <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
      <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">Enterprise</h4>
      <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
        <span class="font-bold text-2xl -me-2">$</span>
        149
      </span>
      <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">Advanced features for scaling your business</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            10 users
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800 dark:text-neutral-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600" href="#">
        Sign up
      </a>
    </div>
    
  </div>



</div>
                              
    </>
    );
}