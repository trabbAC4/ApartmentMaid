"use client"
import Image from 'next/image';
import Link from 'next/Link';
import {useState} from 'react';



const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 1,
        text: "Home",
        link: "/"
      },
      {
        id: 2,
        text: "Book Now",
        link: "/BookNow"
      },
      {
        id: 3,
        text: 'My Account',
        link: "/MyAccount"
      },
      {
        id: 4,
        text: 'Register',
        link: "/Register"
      },
      {
        id: 5,
        text: 'Log In',
        link: "/Login"
      },
      {
        id: 6,
        text: 'Contact',
        link: "/Contact"
      }
    ];
  
    return (
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
        <div>
          <h1 className="text-5xl font-signature ml-2">
            <a
              className="link-underline link-underline-black"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/apartmentmaid.jpg"
                alt="AMAID LOGO"
                width={80}
                height={10}
                className="cursor-pointer"
              />
            </a>
          </h1>
        </div>
  
        <ul className="hidden md:flex">
          {links.map(({ id, text, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={link}>{text}</Link>
            </li>
          ))}
        </ul>
  
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        ></div>
  
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, text, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  

export default NavBar; 
