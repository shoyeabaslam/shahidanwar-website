"use client";
import { ModeToggle } from "@/components/ModeToggle/modetoggle";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/assests/images/logo.jpg";
import { BiLogoInstagramAlt, BiLogoYoutube } from "react-icons/bi";
import { LiaUniversitySolid } from "react-icons/lia";
import { MdFacebook } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import Services from "@/components/Services/services";
import About from "@/components/About/about";
import Contact from "@/components/Contact/contact";
import Footer from "@/components/Footer/footer";
export default function Home() {
  return (
    <main className="">
      <section className="relative w-full min-h-[95vh] h-full px-6 lg:px-20">
        {/* main content */}
        <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center pt-10 md:pt-20">

          <motion.div className="lg:ml-8 order-2 md:order-1 mt-10 flex flex-col items-center md:items-start space-y-2  md:space-y-6 lg:space-y-3"
          initial={{ opacity: 0 }} // Initial state (invisible)
          animate={{ opacity: 1 }} // Target state (visible)
          transition={{ duration: 0.5 }} // Transition duration in seconds


          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-Alegreya text-muted-foreground">
              Hey,This is{" "}
            </h2>
            <h1 className="text-4xl text-ring  font-Alegreya sm:text-6xl lg:text-8xl">
              Shahid Anwar.
            </h1>

            <h2 className="text-center sm:text-start sm:text-lg md:text-xl text-muted-foreground font-Alegreya md:pr-10 ">
              An Entrepreneur | Amazon Millionaire | Founder of Shahid
              University{" "}
            </h2>
            <h2 className="text-muted-foreground font-Alegreya sm:text-lg md:text-xl ">
              Learn and earn with me.
            </h2>
            <div className="flex items-center">
              <Button className="w-32">
                Contact <FaLongArrowAltRight className="ml-4" />
              </Button>
              <Button variant={"outline"} className="px-4 ml-4">
               <IoMdShare />
              </Button>
            </div>
          </motion.div>

          {/* profile */}
          <div className="order-1 md:order-2 md:mr-4 lg:mr-20">
            <div className="bg-transparent w-72 md:w-96 relative p-10">
              <div className="bg-transparent w-full h-full top-0 left-0 right-0 bottom-0 border-4 rounded-full absolute border-ring">
                <div className="absolute z-10 w-48 md:w-80 shadow-md top-[90%] left-[15%] md:top-[94%] md:left-[8%] bg-background rounded-md  py-2 text-center shadow-ring border animate-wiggle">
                  <div className="flex justify-center items-center">
                    <span className="text-ring font-Alegreya text-xl font-semibold">
                      Shahid Anwar
                    </span>{" "}
                    <span className="ml-3 text-ring">
                      <MdVerified />
                    </span>
                  </div>
                </div>
                <div className="w-full h-full relative animate-spin-slow">
                  <div className="absolute w-10 text-xl md:text-4xl text-rose-600 cursor-pointer h-10 md:w-14 md:h-14 rounded-full shadow-sm -top-[-2%] md:-top-[8%] left-[20%] md:left-[45%] bg-background hover:bg-rose-600 hover:text-background p-2 flex justify-center items-center shadow-ring animate-spin-slow ">
                    <BiLogoInstagramAlt />
                  </div>

                  {/* Adjusted the top positioning to align with the first icon */}
                  <div className="absolute w-10 text-xl md:text-4xl text-red-600 cursor-pointer h-10 md:w-14 md:h-14 rounded-full shadow-sm top-[58%] md:top-[40%] -left-[6%] md:left-[92%] bg-background hover:bg-red-600 hover:text-background p-2 flex justify-center items-center shadow-ring animate-spin-slow ">
                    <BiLogoYoutube />
                  </div>

                  {/* Adjusted the top positioning to align with the first icon */}
                  <div className="absolute w-10 text-xl md:text-4xl text-blue-600 cursor-pointer h-10 md:w-14 md:h-14 rounded-full shadow-sm left-[66%] top-[86%] md:top-[93%]  md:left-[45%] bg-background hover:bg-blue-600 hover:text-background p-2 flex justify-center items-center shadow-ring animate-spin-slow ">
                    <MdFacebook />
                  </div>

                  {/* Adjusted the top positioning to align with the first icon */}
                  <div className="absolute w-10 text-xl md:text-4xl text-green-600 cursor-pointer h-10 md:w-14 md:h-14 rounded-full shadow-sm top-[20%] md:top-[40%] left-[90%] md:-left-[8%] bg-background hover:bg-green-600 hover:text-background p-2 flex justify-center items-center shadow-ring animate-spin-slow ">
                    <LiaUniversitySolid />
                  </div>
                </div>
              </div>
              <Image
                className="rounded-full text- shadow-lg shadow-ring"
                src={profile}
                height={1080}
                width={1080}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </section>

      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
}
