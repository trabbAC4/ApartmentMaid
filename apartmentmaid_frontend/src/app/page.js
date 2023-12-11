'use client'
import Image from 'next/image';
import Footer from './components/Footer';
import Link from 'next/Link';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get your Apartment Maid</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Book Now
     </button>
     <h2 class="text-4xl font-extrabold dark:text-white"> Book Now</h2>
     <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400"> High-End Services From untarnished mansions to modern penthouses, our meticulous maids cater to your high-end property with utmost precision</p>
     <button class="bg-blue-500 hover:bg-blue-700 items-center text-white font-bold py-2 px-4 rounded-full">
        Book Now
     </button>

     <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"> </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400"></div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"></div>
         <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400"> </div>
     </div>

     <h2 class="text-4xl font-extrabold dark:text-white"> Cleaning and Relaxation </h2>
     <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400"> Our offerings extend to immaculate kitchen cleaning, pristine bathroom maintenance, and flawless living space organization </p>
     <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400"> Our maids are handpicked, rigorously trained, and committed to excellence. ApartmentMaid isn't just about cleaning your property- it's a statement of lavish living. </p>
    
     <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> BOOK IN LESS THAN 60 SEC </h1>
     <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400"> Leave the Dirty Work to Us and Enjoy a Fresh, Pristine Space in Just a Few Easy Steps. Ready to elevate your cleaning experience? Schedule your first appointment now and prepare to indulge in opulence. </p>
     
     
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Book Now
     </button>

     <h1> LOGIN FORM </h1>






    <h1> BOOK NOW </h1>
    <Link href = "/BookNow"> Book Now </Link>



    <h1> REGISTER </h1>

    
    </main> 
  )
}
