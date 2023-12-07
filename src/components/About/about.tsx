import React from "react";
import { Button } from "../ui/button";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
const About = () => {
  return (
    <section id="about" className="font-Roboto">
      <div className="container py-10">
        <h2 className="font-Alegreya text-2xl md:text-4xl text-ring text-center">
          Discover More About Me
        </h2>
        <div className="flex mt-10 flex-col lg:flex-row  space-y-4 md:space-y-0">
          <div className="flex-1 md:p-6 text-justify">
            <p>
              Welcome to the world of Entrepreneur{" "}
              <span className="text-ring">Shahid Anwar!</span> As a seasoned
              business owner, social media influencer, and dedicated YouTuber,
              I&apos;m here to share my passion for bitcoin and economics with
              you. Explore the insightful content on my YouTube channel,
              Entrepreneur Shahid Anwar, where I break down complex topics into
              digestible, informative videos.
              <br />
              Dive into my vibrant life adventures by checking out my Instagram
              page, @shahidanwarllc, and witness the journey of a well-known
              figure in the business world. On Facebook, you can find my page,
              Shahid Anwar LLC, offering classes and a variety of training
              materials on Amazon and business strategies. Join the community.
              <br />
              As an entrepreneur, I&apos;ve built Shahid Anwar LLC to not only
              showcase my experiences but also to provide valuable insights and
              training materials for those eager to navigate the world of
              business. Born out of a desire to make a difference, my YouTube
              channel, established in October 2017, serves as a hub for diverse
              information across various business domains. Curious about my
              financial journey? In 2022, my net worth stands at a minimum of
              $1,000,000, equivalent to a substantial 226,252,500.00 in rupees
              from Pakistan. Notably, my YouTube endeavors contribute
              significantly, with a net worth of around $58,446 from this
              platform alone.
              <br />
              Welcome to Entrepreneur Shahid Anwar&apos;s world – where
              knowledge meets inspiration, and success is a journey we navigate
              together.
            </p>

           <Link href={"#services"}> <Button className="px-4 my-4 text-gray-50 flex items-center">Checkout Services <FaArrowUp className="ml-2" /></Button></Link>
          </div>
          <div className="flex-1 lg:pt-10 w-full">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/WTQn0Yxy2Lg?si=dvsQSpXPXPaweBTg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
