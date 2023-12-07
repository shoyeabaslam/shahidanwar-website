// pages/contact.js

import React from "react";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section id="contact" className="font-Roboto">
      <div className="container min-h-screen flex items-center justify-center">
        <div className="p-8 rounded-xl shadow-lg border shadow-border max-w-3xl w-full ">
          <h2 className="text-3xl font-bold mb-6 text-ring font-Alegreya">Contact Us</h2>
          <form className="text-muted-foreground">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium "
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full outline-none bg-border/60 rounded-md"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium "
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full  outline-none bg-border/60 rounded-md"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium "
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 w-full   outline-none bg-border/60 rounded-md"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <Button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
