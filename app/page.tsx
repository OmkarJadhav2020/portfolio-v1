"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main>
        <div className="home">
          {/* Navbar */}
          <nav className="navbar select-none flex justify-between w-full items-center h-[90px] px-8 absolute top-0">
            <p className="text-3xl">OJ</p>
            <div className="flex items-center space-x-4">
              <p className="hidden text-2xl md:block">menu</p>
              <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">&#9776;</button>
            </div>
          </nav>

          {/* Mobile View */}
          <div
            className={`fixed top-0 right-0 h-full w-full md:w-2/3 bg-white transition-transform duration-500 transform ease-[cubic-bezier(.58,-0.18,.97,.87)] ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50 flex justify-center items-center`}
          >
            <div className="mobile-view-main grid gap-4 md:grid-cols-2 md:justify-start md:items-start p-4">
              {/* Close Button */}
              <button onClick={() => setIsOpen(false)} className="text-3xl self-start">&#10006;</button>

              {/* Social Section */}
              <div className="flex flex-col">
                <p className="text-gray-600 text-base md:text-lg mb-2 tracking-wide">Social</p>
                <p className="text-xl md:text-2xl py-4">Github</p>
                <p className="text-xl md:text-2xl py-4">Linkedin</p>
                <p className="text-xl md:text-2xl py-4">X</p>
              </div>

              {/* Menu Section */}
              <div className="flex flex-col">
                <p className="text-gray-600 text-base md:text-lg mb-2 tracking-wide">Menu</p>
                <p className="text-3xl md:text-4xl py-4">About Me</p>
                <p className="text-3xl md:text-4xl py-4">Projects</p>
                <p className="text-3xl md:text-4xl py-4">Contact</p>
              </div>

              {/* Get in Touch Section */}
              <div className="flex flex-col">
                <p className="text-gray-600 text-base md:text-lg mb-2 tracking-wide">Get in touch</p>
                <p className="md:text-2xl">jadhavoj2023@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content-home flex justify-center items-center h-screen w-full flex-col">
            <h1 className="md:text-[70px] max-sm:text-[9vw] sm:text-[9vw] max-sm:max-w-sm max-sm:leading-tight text-light khula-extrabold w-[732px] text-center leading-[85px] text-shadow">
              Where every line of <span className="add-grad">code</span> tells a story.
            </h1>

            <p className="small-hero text-lg mt-4 max-w-[390px] text-gray-2 max-sm:text-[4vw] px-4 text-center leading-[123%]">Software engineer turning ideas into impactful, innovative solutions.</p>
            <Image src="/scroll.png" alt="IMAGE HERE" width={100} height={100} className="scroller" style={{ filter: 'invert(1)'}} />
          </div>
        </div>
      </main>

      <style jsx>{`
        .small-hero
        {
          color:#888888;
        }
        .text-shadow {
          text-shadow: rgba(255, 255, 255, 0.25) 0px 0px 6px;
          transform: translateY(0px);
          opacity: 1;
        }
      `}</style>
    </>
  );
}
