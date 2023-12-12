'use client';
import Image from 'next/image';
import Link from 'next/Link';
import {useState} from 'react';



const Footer = () => {
    return (
        <footer class="bg-gray-800 text-white p-8">
            <div class="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
            <div class="mb-4">
            <Image 
                src= "/apartmentmaid.jpg"
                alt=  "AMAID LOGO"
                width = {80}
                height = {10}
                className = "cursor-pointer"
            /> 
            <span class="text-lg font-bold">ApartmentMaid LLC.</span>
            </div>
        
        
         <div class="text-center mb-4">
            <p class="text-sm"> Your Apartment Maid Clean </p>
        </div>

    <div>
      <p> Contact:</p>
      <div class="mb-2">
        <p>Phone: <span class="font-bold"> +(1) 332 334 5085</span></p>
        <p>Email: <span class="font-bold">Booking@apartmentmaid.co</span></p>
      </div>

      <div class="flex">
        <a href="#" class="mr-2">
          <img src="facebook-icon.png" alt="Facebook" class="h-6 w-6" />
        </a>
        <a href="#" class="mr-2">
          <img src="twitter-icon.png" alt="Twitter" class="h-6 w-6" />
        </a>
        <a href="#">
          <img src="instagram-icon.png" alt="Instagram" class="h-6 w-6" />
        </a>
      </div>
    </div>
    </div>
    </footer>



    )
}


export default Footer;

