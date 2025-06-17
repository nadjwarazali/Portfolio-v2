"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? "#ffffff" : "transparent",
        // boxShadow: scrolled ? "0 2px 12px rgba(0, 0, 0, 0.05)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm px-6 py-4"
    >
      <div className="mx-10 px-4">
        <div className="flex justify-between items-center h-10">
          <Link href="/">
            <img src="/assets/logo-temp.svg"></img>
          </Link>
          <div className="hidden md:flex space-x-14">
            <Link
              href="#about"
              className="font-mono text-md hover:text-blue-600"
            >
              ABOUT
            </Link>
            <Link
              href="#projects"
              className="font-mono text-md hover:text-blue-600"
            >
              PROJECTS
            </Link>
            <Link
              href="#contact"
              className="font-mono text-md hover:text-blue-600"
            >
              CONTACT
            </Link>
          </div>

          {/* <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
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
      )}
    </motion.nav>
  );
}
