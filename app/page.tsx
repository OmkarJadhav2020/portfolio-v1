"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [txtColor, setTxtColor] = useState("white");
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 1)"); // Default background color
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const homeSectionHeight = window.innerHeight; // Height of home section
        const scrollPosition = mainRef.current.scrollTop; // Current scroll position
        // console.log("Scroll Position:", scrollPosition);

        // Change background color based on scroll position
        if (scrollPosition > homeSectionHeight / 2) {
          setBgColor("white");
          setTxtColor("black"); // Background color when not in home section
        } else {
          setBgColor("rgba(0, 0, 0, 1)");
          setTxtColor("white"); // Original home background color
        }
      }
    };

    const mainElement = mainRef.current;
    mainElement?.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      mainElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main
        ref={mainRef}
        className="overflow-x-hidden scroll-snap-container"
        style={{ backgroundColor: bgColor }}
      >
        <div className="home">
          {/* Navbar */}
          <nav className="navbar select-none flex justify-between w-full items-center h-[90px] px-8 absolute top-0">
            <p className="text-3xl z-20" style={{ color: txtColor }}>
              OJ
            </p>
            <div className="flex items-center space-x-4">
              <p className="hidden text-2xl md:block">menu</p>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl z-20"
                style={{ color: txtColor }}
              >
                &#9776;
              </button>
            </div>
          </nav>

          {/* Mobile View */}
          <div
            className={`fixed top-0 right-0 h-full w-full md:w-2/3 bg-white transition-transform duration-500 transform ease-[cubic-bezier(.58,-0.18,.97,.87)] ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } z-50 flex justify-center items-center`}
            style={{ border: "1px solid black" }}
          >
            <div className="mobile-view-main grid gap-4 md:grid-cols-2 md:justify-start md:items-start p-4">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl self-start"
              >
                &#10006;
              </button>

              {/* Social Section */}
              <div className="flex flex-col">
                <p className="text-gray-600 text-base md:text-lg mb-2 tracking-wide">
                  Social
                </p>
                <p className="text-xl md:text-2xl py-4 hover:underline ">
                  <Link href={"https://github.com/OmkarJadhav2020"}>
                    Github
                  </Link>
                </p>
                <p className="text-xl md:text-2xl py-4 hover:underline ">
                  <Link
                    href={"https://www.linkedin.com/in/omkar-jadhav-036360204/"}
                  >
                    Linkedin
                  </Link>
                </p>
                <p className="text-xl md:text-2xl py-4 hover:underline ">
                  <Link href={"#"}>X</Link>
                </p>
              </div>

              {/* Menu Section */}
              <div className="flex flex-col">
                <p className="text-gray-600 text-base md:text-lg mb-2 tracking-wide">
                  Menu
                </p>
                <p className="text-3xl md:text-4xl py-4 tran transition-transform hover:translate-x-3 ">
                  <Link onClick={() => setIsOpen(false)} href={"#about-me"}>
                    About Me
                  </Link>
                </p>
                <p className="text-3xl md:text-4xl py-4 tran transition-transform hover:translate-x-3 ">
                  <Link onClick={() => setIsOpen(false)} href={"#projects"}>
                    Projects
                  </Link>
                </p>
                <p className="text-3xl md:text-4xl py-4 tran transition-transform hover:translate-x-3 ">
                  <Link onClick={() => setIsOpen(false)} href={"#contacts"}>
                    Contact
                  </Link>
                </p>
              </div>

              {/* Get in Touch Section */}
              <div className="flex flex-col">
                <p className="text-gray-600 text-base md:text-lg mb-2 tracking-wide">
                  Get in touch
                </p>
                <p className="md:text-2xl hover:underline">
                  jadhavoj2023@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content-home flex justify-center items-center h-screen w-full flex-col">
            <h1 className="md:text-[70px] max-sm:text-[9vw] sm:text-[9vw] max-sm:max-w-sm max-sm:leading-tight text-light khula-extrabold w-[732px] text-center leading-[85px] text-shadow">
              Where every line of <span className="add-grad">code</span> tells a
              story.
            </h1>

            <p className="small-hero text-lg mt-4 max-w-[390px] text-gray-2 max-sm:text-[4vw] px-4 text-center leading-[123%]">
              Software engineer turning ideas into impactful, innovative
              solutions.
            </p>
            <Image
              src="/scroll.png"
              alt="IMAGE HERE"
              width={100}
              height={100}
              className="scroller"
              style={{ filter: "invert(1)" }}
            />
          </div>
        </div>

        <div
          id="about-me"
          className="about-me h-screen w-screen scroll-snap-section flex flex-col items-center justify-center text-left space-y-8 px-8 md:gap-y-28"
        >
          {/* First Row: h1 */}
          <h1 className="appear text-[1.2rem] font-bold tracking-wide md:text-3xl lg:text-5xl max-w-5xl ">
            I believe in crafting software that’s as reliable as it is
            innovative, driven by a commitment to quality, collaboration, and
            continuous improvement.
          </h1>

          {/* Second Row: Content Div */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Div */}
            <div className="flex flex-col items-center md:items-start space-y-4 gap-y-2 md:gap-y-4">
              <h2 className=" text-2xl md:text-3xl lg:text-4xl">
                Hi, I&apos;m Omkar.
              </h2>
              <Link
                href={"#contacts"}
                className=" bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800"
              >
                Get in Touch
              </Link>
            </div>

            {/* Right Div */}
            <div className=" text-base md:text-xl lg:text-2xl max-w-md lg:max-w-xl text-gray-600">
              <p>
                I am a 21-year-old software engineer with a passion for creating
                intuitive systems that prioritize user experience. With hands-on
                experience in cloud computing and AI/ML technologies. <br /> My
                strong foundation in data structures and algorithms enables me
                to tackle complex challenges efficiently, making me a valuable
                asset for any team.
              </p>
            </div>
          </div>
        </div>

        <div
          id="projects"
          className="about-me h-screen w-screen scroll-snap-section"
        >
          Projects
        </div>
        <div
          id="contacts"
          className="about-me h-screen w-screen scroll-snap-section grid items-center justify-center relative"
          style={{
            background: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
          }}
        >
          <div className="flex flex-col items-center ">
            <h3 className="text-xl md:text-2xl text-stone-600 font-semibold appear">Want to collaborate ?</h3>
            <h1 className="text-5xl md:text-7xl font-semibold appear">Let&apos;s have a chat!</h1>
            <div className="mt-20 flex gap-x-5">
              <Link href={"#"} className="px-2 py-1 flex gap-1 items-center anim-btn" style={{border:"1px solid black",borderRadius : "15px"}}><MdOutlineEmail /> Email</Link>
              <Link href={"#"} className="px-2 py-1 flex gap-1 items-center anim-btn" style={{border:"1px solid black",borderRadius : "15px"}}><IoCallOutline /> Phone</Link>
              <Link href={"# "} className="px-2 py-1 flex gap-1 items-center anim-btn" style={{border:"1px solid black",borderRadius : "15px"}}><FiLinkedin /> Linkedin</Link>
            </div>
            <p className="mt-10 text-2xl font-semibold">OJ</p>
            <p className="text-3xl font-thin ">Omkar Jadhav</p>
            <p className="mb-10 text-sm sm:text-base font-thin text-gray-3 select-none text-center" style={{
              position:"absolute",
              bottom : "0",
            }}>&copy; Omkar Jadhav 2024 . All rights reserved . Location India. <br />  This site showcases a selection of my personal and professional projects.</p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .small-hero {
          color: #888888;
        }
        .text-shadow {
          text-shadow: rgba(255, 255, 255, 0.25) 0px 0px 6px;
          transform: translateY(0px);
          opacity: 1;
        }
        .scroll-snap-container {
          scroll-snap-type: y mandatory; /* Set the snap type for the container */
          height: 100vh; /* Ensure full viewport height */
          overflow-y: auto; /* Enable vertical scrolling */
        }
        .scroll-snap-section {
          scroll-snap-align: start; /* Align for snapping */
        }
      `}</style>
    </>
  );
}
