"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { GoGitBranch, GoLinkExternal } from "react-icons/go";
import { BsYoutube } from "react-icons/bs";

import { Project } from "@/data/interfaces";
import { achievementsData, projectData, experienceData } from "@/data/content"; 

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [txtColor, setTxtColor] = useState("white");
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 1)");
  const mainRef = useRef<HTMLElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [modalData, setModalData] = useState<Project | null>(null);

  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);

  const openModal = (project: Project) => {
    setModalData(project);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const homeSectionHeight = window.innerHeight;
        const scrollPosition = mainRef.current.scrollTop;

        if (scrollPosition > homeSectionHeight / 2) {
          setBgColor("white");
          setTxtColor("black");
        } else {
          setBgColor("rgba(0, 0, 0, 1)");
          setTxtColor("white");
        }
      }
    };

    const mainElement = mainRef.current;
    mainElement?.addEventListener("scroll", handleScroll);

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
                {/* NEW: Achievements Link */}
                <p className="text-3xl md:text-4xl py-4 tran transition-transform hover:translate-x-3 ">
                  <Link onClick={() => setIsOpen(false)} href={"#achievements"}>
                    Achievements
                  </Link>
                </p>
                <p className="text-3xl md:text-4xl py-4 tran transition-transform hover:translate-x-3 ">
                  <Link onClick={() => setIsOpen(false)} href={"#experience"}>
                    Experience
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
                  jadhavoj2025@gmail.com
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
              alt="Scroll down icon"
              width={100}
              height={100}
              className="scroller"
              style={{ filter: "invert(1)" }}
            />
          </div>
        </div>

          {/* {About me} */}
        <div
          id="about-me"
          className="about-me min-h-screen w-screen scroll-snap-section flex flex-col items-center justify-center text-left space-y-8 px-8 md:gap-y-28 bg-white text-black"
        >
          <h1 className="appear text-[1.2rem] font-bold tracking-wide md:text-3xl lg:text-5xl max-w-5xl ">
            I believe in crafting software that’s as reliable as it is
            innovative, driven by a commitment to quality, collaboration, and
            continuous improvement.
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
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

        {/* Achievements Section */}
        <div id="achievements" className="min-h-screen w-screen scroll-snap-section flex flex-col items-center justify-center py-16 px-8 bg-white text-black">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 appear text-center">
                Achievements
            </h1>
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {achievementsData.map((achievement, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                        <achievement.icon className="text-5xl mb-4 text-gray-700" />
                        <h3 className="text-xl font-bold text-black mb-2">{achievement.title}</h3>
                        <p className="text-base text-gray-600">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Experience Section */}
        <div
          id="experience"
          className="min-h-screen w-screen scroll-snap-section flex flex-col items-center justify-center py-16 px-8 bg-white text-black"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-12 appear">
            Experience
          </h1>
          <div className="w-full max-w-5xl flex flex-col md:flex-row md:space-x-8">
            {/* Desktop Tabs */}
            <div className="hidden md:flex flex-col md:w-1/3">
              {experienceData.map((exp, index) => (
                <button
                  key={`desktop-tab-${index}`}
                  onClick={() => setActiveCompanyIndex(index)}
                  className={`relative text-left py-3 px-4 text-xl font-semibold transition-colors duration-200 ease-in-out ${ activeCompanyIndex === index ? "text-black bg-gray-50" : "text-gray-500 hover:text-black hover:bg-gray-100" }`}
                >
                  {activeCompanyIndex === index && ( <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-br from-blue-400 to-purple-600"></span> )}
                  <span className="ml-2">{exp.company}</span>
                </button>
              ))}
            </div>

            {/* Desktop Details Panel */}
            <div className="hidden md:block md:w-2/3 md:pl-8 pt-4">
              {experienceData[activeCompanyIndex] && (
                <div key={`desktop-details-${activeCompanyIndex}`} className="animate-fadeIn" >
                  <h2 className="text-2xl md:text-3xl font-bold mb-2"> {experienceData[activeCompanyIndex].role} @{" "} {experienceData[activeCompanyIndex].company} </h2>
                  <p className="text-gray-600 text-base md:text-lg mb-4"> {experienceData[activeCompanyIndex].duration} &mdash;{" "} {experienceData[activeCompanyIndex].location} </p>
                  <ul className="list-disc list-inside text-gray-800 text-base md:text-lg mb-6 space-y-2">
                    {experienceData[activeCompanyIndex].description.map( (point, i) => ( <li key={i} dangerouslySetInnerHTML={{ __html: point }} /> ) )}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experienceData[activeCompanyIndex].technologies.map( (tech, i) => ( <span key={i} className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full anim-btn" style={{ border: "1px solid #ccc" }} > {tech} </span> ) )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden w-full">
              {experienceData.map((exp, index) => (
                <div key={`mobile-accordion-${index}`} className="mb-4 last:mb-0 border-b border-gray-200">
                  <button className="flex justify-between items-center w-full py-4 text-xl font-semibold text-left" onClick={() => setActiveCompanyIndex( activeCompanyIndex === index ? -1 : index )} aria-expanded={activeCompanyIndex === index} aria-controls={`exp-details-${index}`} >
                    <span>{exp.company}</span>
                    <FaChevronDown className={`transform transition-transform duration-300 ${ activeCompanyIndex === index ? "rotate-180" : "" }`} />
                  </button>
                  <div id={`exp-details-${index}`} className={`overflow-hidden transition-all duration-500 ease-in-out ${ activeCompanyIndex === index ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0" }`} >
                    <div className="pl-4">
                      <h2 className="text-xl font-bold mb-1"> {exp.role} @ {exp.company} </h2>
                      <p className="text-gray-600 text-sm mb-3"> {exp.duration} &mdash; {exp.location} </p>
                      <ul className="list-disc list-inside text-gray-800 text-base mb-4 space-y-1">
                        {exp.description.map((point, i) => ( <li key={i} dangerouslySetInnerHTML={{ __html: point }} /> ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => ( <span key={i} className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-full anim-btn" style={{ border: "1px solid #ccc" }} > {tech} </span> ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div
          id="projects"
          className="min-h-screen w-screen scroll-snap-section flex flex-col items-center justify-center bg-white text-black"
        >
          <h1 className="appear text-center text-4xl mt-10">Projects</h1>
          <div className="all-projects w-full xl:w-7/12 flex flex-col m-10">
            {projectData.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="cards relative flex md:flex-row flex-col w-full justify-between items-center p-10 cursor-pointer"
              >
                <div className="flex gap-1 items-start">
                  <p className="text-sm md:text-xl text-gray-500">{`0${project.id}`}</p>
                  <h1 className="text-2xl sm:text-4xl md:text-6xl">
                    {project.title}
                  </h1>
                </div>
                <p className="text-base md:text-lg text-gray-500">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*Project Modal */}
        {showModal && modalData && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4 animate-fadeIn" onClick={closeModal}>
            <div className="bg-white text-black rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-8" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-black transition-colors">
                    <IoCloseOutline />
                </button>

                <h2 className="text-4xl font-bold mb-4">{modalData.title}</h2>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">About the Project</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {modalData.detailedDescription.map((point, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {modalData.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full" style={{ border: "1px solid #ccc" }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                    {modalData.link && (
                        <a href={modalData.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                            <GoLinkExternal /> Live Demo
                        </a>
                    )}
                    {modalData.videoLink && (
                        <a href={modalData.videoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-white bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                            <BsYoutube /> Video Demo
                        </a>
                    )}
                    {modalData.github && (
                        <a href={modalData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-gray-700 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors">
                            <GoGitBranch /> GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
        )}

        {/* Contact Section */}
        <div
          id="contacts"
          className="about-me h-screen w-screen scroll-snap-section grid items-center justify-center relative"
          style={{
            background: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
          }}
        >
          <div className="flex flex-col items-center ">
            <h3 className="text-xl md:text-2xl text-stone-600 font-semibold appear">
              Want to collaborate ?
            </h3>
            <h1 className="text-4xl md:text-7xl font-semibold appear">
              Let&apos;s have a chat!
            </h1>
            <div className="mt-20 flex gap-x-5">
              <Link href={"mailto:jadhavoj2025@gmail.com"} className="px-2 py-1 flex gap-1 items-center anim-btn" style={{ border: "1px solid black", borderRadius: "15px" }} >
                <MdOutlineEmail /> Email
              </Link>
              <Link href={"tel:+917767827080"} className="px-2 py-1 flex gap-1 items-center anim-btn" style={{ border: "1px solid black", borderRadius: "15px" }} >
                <IoCallOutline /> Phone
              </Link>
              <Link href={"https://www.linkedin.com/in/omkar-jadhav-036360204/"} className="px-2 py-1 flex gap-1 items-center anim-btn" style={{ border: "1px solid black", borderRadius: "15px" }} >
                <FiLinkedin /> Linkedin
              </Link>
            </div>
            <p className="mt-10 text-2xl font-semibold">OJ</p>
            <p className="text-3xl font-thin ">Omkar Jadhav</p>
            <p
              className="mb-10 text-sm sm:text-base font-thin text-gray-3 select-none text-center"
              style={{ position: "absolute", bottom: "0" }}
            >
              &copy; Omkar Jadhav 2024 . All rights reserved . Location India.{" "}
              <br /> This site showcases a selection of my personal and
              professional projects.
            </p>
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
          scroll-snap-type: y mandatory;
          height: 100vh;
          overflow-y: auto;
        }
        .scroll-snap-section {
          scroll-snap-align: start;
        }
        .add-grad {
          background: linear-gradient(
            to right,
            #8a2be2,
            #4169e1
          ); /* Indigo to Royal Blue */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}