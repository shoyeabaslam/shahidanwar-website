"use client";
import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import logo from "@/assests/images/logo.png";
import Image from "next/image";
import { ModeToggle } from "../ModeToggle/modetoggle";
import { AnimatePresence, motion } from "framer-motion";
import { FaSitrox } from "react-icons/fa6";
import Link from "next/link";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="flex w-screen relative backdrop-blur-lg  md:fixed  font-Lato z-50 text-lg h-20 text-muted-foreground py-4 justify-between items-center">
        <p className="flex text-ring items-center text-2xl md:text-3xl px-5 md:px-10">
          <FaSitrox className="" />
          <span className="font-Alegreya text-xl mt-2 md:text-2xl text-muted-foreground">
            hahid
          </span>
        </p>
        <div className="lg:hidden absolute  right-0 flex ">
          {/* Mobile menu button */}
          <Button className="p-4 w-10  mr-4" onClick={toggleMobileMenu}>
            ☰
          </Button>
          <div className=" mr-7 md:mr-10">
            <ModeToggle />
          </div>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex w-[70%] h-screen lg:h-[50px] justify-between items-center transition`}
        >
          {/* Regular navigation for larger screens */}
          <div className="hidden ml-14 lg:flex space-x-20 justify-center items-center">
            <ul className="hidden lg:flex space-x-20">
              <Link href="/">
                <li className="hover:text-ring">Home</li>
              </Link>
              <Link href="#services">
                {" "}
                <li className="hover:text-ring">Services</li>
              </Link>
              <Link href="#about">
                {" "}
                <li className="hover:text-ring">About</li>
              </Link>
            </ul>
            <div className="flex items-center justify-center">
            <Link href="#contact"><Button className="mr-6 px-10">Contact</Button></Link>
            </div>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden absolute   top-0 z-50 right-0 h-screen shadow-lg border-l-2 bg-background w-96 p-4"
                initial={{ x: 300 }}
                animate={{ x: 8 }}
                exit={{ x: 300 }} // Exit animation when closing the menu
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120,
                  damping: 22,
                }}
              >
                <ul className="flex flex-col items-center space-y-10 relative">
                  <Button
                    className="w-3 h-6 absolute top-0 text-xs left-0"
                    variant={"destructive"}
                    onClick={toggleMobileMenu}
                  >
                    X
                  </Button>
                  <Link href="/">
                    <li className="hover:text-ring">Home</li>
                  </Link>
                  <Link href="#services">
                    {" "}
                    <li className="hover:text-ring">Services</li>
                  </Link>
                  <Link href="#about">
                    {" "}
                    <li className="hover:text-ring">About</li>
                  </Link>
                  <Link href="#contact"> <li>
                    <Button className="px-10">Contact</Button>
                  </li>
                  </Link>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hidden lg:block mr-10">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
