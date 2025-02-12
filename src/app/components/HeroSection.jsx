"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticlesContainer from "./ProjectsContainer";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-2 text-4xl sm:text-6xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              className="text-[#ff9ff3]"
              sequence={[
                "Sajib Hossen",
                1000,
                "Frontend Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl">
            I&apos;m a Frontend developer specializing in MongoDB, Express.js,
            React, and Node.js. I create dynamic web applications that combine
            clean code with intuitive design for seamless user experiences.
            Explore my portfolio to see my work in action.
          </p>
          <div className="flex gap-5 ms-3">
            <Link href="https://web.facebook.com/md.sajib.hossen.12671/">
              <FaFacebook
                className="text-white hover:text-[#ff9ff3] cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6"
                size={30}
              />
            </Link>
            <Link href="https://github.com/sajib689">
              <FaGithub
                className="text-white hover:text-[#ff9ff3] cursor-pointer transition-transform duration-300 hover:scale-110 hover:-rotate-6"
                size={30}
              />
            </Link>
            <Link href="https://x.com/SajibJashore">
              <FaTwitter
                className="text-white hover:text-[#ff9ff3] cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6"
                size={30}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/sajib-babu/">
              <FaLinkedin
                className="text-white hover:text-[#ff9ff3] cursor-pointer transition-transform duration-300 hover:scale-110 hover:-rotate-6"
                size={30}
              />
            </Link>
          </div>

          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1ZkcILMmXHDpmZx3es0ij1isk4FLYodLw/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
            {/* Background Motion */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              }}
            />

            {/* Image with Zoom Effect on Hover */}
            <Image
              src="/sajib1.png"
              alt="Sajib Hossen"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform duration-300 ease-in-out hover:scale-110"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
