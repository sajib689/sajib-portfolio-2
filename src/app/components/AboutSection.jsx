"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 flex gap-8">
        <div>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
        </div>
        <div>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </div>
        <div>
          <li>Next Js</li>
          <li>Typescript</li>
          <li>Mongoose</li>
        </div>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MM College, Jashore</li>
        <li>Islamic History & Culture(2nd Year)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Hero</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative w-[500px] h-[500px]">
          {/* Background Gradient Motion */}
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

          {/* Image */}
          <Image
            src="/sajib1.png"
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Sajib Hossen"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4"><span className="text-[#ff9ff3]">A</span>bout <span className="text-[#ff9ff3]">M</span>e</h2>
          <p className="text-base lg:text-lg">
            Hello, I’m Sajib Hossen, a passionate frontend developer from
            Jashore, Khulna, Bangladesh. Currently pursuing a BA in Islamic
            History and Culture at MM College, Jashore. With a focus on crafting
            visually appealing and functional web interfaces, I specialize in
            frontend technologies like HTML, CSS, JavaScript, Tailwind CSS, and
            React.js. My backend skills include Node.js, Express.js, and
            MongoDB. I use JWT for authentication and Firebase for various
            services.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
