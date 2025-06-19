"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarProps = {
  scrollRef: React.RefObject<any>;
};
export default function Navbar({ scrollRef }: NavbarProps) {
  const parallaxRef = scrollRef;

  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <motion.nav
      initial={false}
      animate={{
        y: showNavbar ? 0 : -100,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md px-6 py-4"
    >
      <div className="mx-10 px-4">
        <div className="flex justify-between items-center h-10 ">
          <button
            className="cursor-pointer"
            onClick={() => parallaxRef.current.scrollTo(0)}
          >
            <img src="/assets/logo-temp.svg"></img>
          </button>
          <div className="hidden md:flex space-x-14">
            <button
              onClick={() => parallaxRef.current.scrollTo(0.25)}
              className="cursor-pointer font-mono text-md hover:text-[#0022FF]"
            >
              PROJECTS
            </button>
            <button
              onClick={() => parallaxRef.current.scrollTo(1.2)}
              className="cursor-pointer font-mono text-md hover:text-[#0022FF]"
            >
              ABOUT
            </button>
            <button
              onClick={() => parallaxRef.current.scrollTo(2)}
              className="cursor-pointer font-mono text-md hover:text-[#0022FF]"
            >
              CONTACT
            </button>
          </div>

          {/* <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-600">
            About
          </Link>
          <Link href="/projects" className="block hover:text-blue-600">
            Projects
          </Link>
          <Link href="/contact" className="block hover:text-blue-600">
            Contact
          </Link>
        </div>
      )} */}
    </motion.nav>
  );
}
