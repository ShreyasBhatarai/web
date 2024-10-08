import React, { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
                font-family: "Raleway", sans-serif;
            }

            button[data-toggle-navbar][data-is-open="true"] #line-1 {
                transform: translateY(0.375rem) rotate(40deg);
            }

            button[data-toggle-navbar][data-is-open="true"] #line-2 {
                transform: scaleX(0);
                opacity: 0;
            }

            button[data-toggle-navbar][data-is-open="true"] #line-3 {
                transform: translateY(-0.375rem) rotate(-40deg);
            }
          `}
        </style>
      </head>
      <header className="absolute inset-x-0 top-0 z-50 py-6">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <nav className="w-full flex justify-between gap-6 relative">
            <div className="min-w-max inline-flex relative">
              <a href="#" className="relative flex items-center gap-3">
                <div className="relative w-7 h-7 overflow-hidden flex rounded-xl">
                  <span className="absolute w-4 h-4 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
                  <span className="absolute w-4 h-4 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
                  <span className="absolute w-4 h-4 -bottom-1 -left-1 bg-blue-600 rounded-md rotate-45"></span>
                  <span className="absolute w-2 h-2 rounded-full bg-gray-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                </div>
                <div className="inline-flex text-lg font-semibold text-gray-900">SB Medias</div>
              </a>
            </div>

            <div
              data-nav-overlay
              aria-hidden="true"
              className={`fixed ${isNavOpen ? "" : "hidden"} inset-0 lg:!hidden bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl`}
              onClick={toggleNav}
            ></div>

            <div
              data-navbar
              className={`flex ${isNavOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-10"} overflow-hidden lg:visible lg:opacity-100 lg:-translate-y-0 lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white lg:!bg-transparent border-x border-x-gray-100 lg:border-x-0`}
            >
              <ul className="border-t border-gray-100 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-gray-700 w-full lg:justify-center lg:items-center">
                <li>
                  <a href="#" className="duration-300 font-medium ease-linear hover:text-blue-600 py-3 mx-4" onClick={()=>{setIsNavOpen(false)}}>Home</a>
                </li>
                <li>
                  <a href="#/Service" className="duration-300 font-medium ease-linear hover:text-blue-600 py-3 mx-4"  onClick={()=>{setIsNavOpen(false)}}>Services</a>
                </li>
                <li>
                  <a href="#/Team" className="duration-300 font-medium ease-linear hover:text-blue-600 py-3 mx-4"  onClick={()=>{setIsNavOpen(false)}}>Our Team</a>
                </li>
                <li>
                  <a href="#/Price" className="duration-300 font-medium ease-linear hover:text-blue-600 py-3 mx-4"  onClick={()=>{setIsNavOpen(false)}}>Price</a>
                </li>
                <li>
                  <a href="#/ContactUs" className="duration-300 font-medium ease-linear hover:text-blue-600 py-3 mx-4"  onClick={()=>{setIsNavOpen(false)}}>Contact</a>
                </li>
              </ul>

              <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100 lg:border-0 px-6 lg:px-0">
                <a
                  href="#"
                  className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
                >
                  <span className="relative z-10 text-white">Get Started</span>
                </a>
              </div>
            </div>

            <div className="min-w-max flex items-center gap-x-3">
              <button
                data-toggle-navbar
                data-is-open={isNavOpen}
                onClick={toggleNav}
                className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative"
              >
                <span
                  id="line-1"
                  className={`w-6 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear ${isNavOpen ? "transform translateY-1.5 rotate-40" : ""
                    }`}
                ></span>
                <span
                  id="line-2"
                  className={`w-6 origin-center mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear ${isNavOpen ? "transform scaleX-0 opacity-0" : ""
                    }`}
                ></span>
                <span
                  id="line-3"
                  className={`w-6 mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear ${isNavOpen ? "transform translateY--1.5 rotate--40" : ""
                    }`}
                ></span>
                <span className="sr-only">togglenav</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
