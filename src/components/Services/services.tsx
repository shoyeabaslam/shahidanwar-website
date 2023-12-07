import React from "react";
import categories from "@/assests/data/courses";
import { FaHandPointRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import { GoClock } from "react-icons/go";
const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl md:text-4xl font-Alegreya text-ring text-center font-bold mb-8">
          Learning and Services
        </h1>
        {categories[0].courses.map((category, index) => (
          <div key={index} className="mb-8 font-Roboto">
            <h2 className="text-xl text-muted-foreground font-bold mb-4 flex items-center">
              <span className="mr-2 text-ring">
                <FaHandPointRight />
              </span>
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.courses.map((course, i) => (
                <Link href={course.link} key={i}>
                  <div className="p-4 bg-border/20 border border-border/70 shadow-border shadow-lg rounded-xl">
                    <h3 className="text-lg text-muted-foreground font-semibold mb-2">
                      {course.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20 font-Roboto">
            <div className="flex-1 flex flex-col justify-center items-center p-4 bg-border/20 border border-border/70 shadow-border shadow-lg rounded-xl space-y-4">
                <h3 className="text-xl">Ask Me Anything Direct Message</h3>
                <p>20 seconds custome video</p>
                <Button className="w-full text-gray-50">Start $20 Request</Button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center p-4 bg-border/20 border border-border/70 shadow-border shadow-lg rounded-xl space-y-2">
                <h3 className="text-xl">Book 1 : 1 call with me</h3>
                <p>1 : 1 Call Appointment</p>
                <p className="flex space-x-10"><span className="flex items-center"><GoClock className="mr-2"/> 60Min</span><span>$1000</span></p>
                <Button className="w-full text-gray-50">Start $20 Request</Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
