"use client";

import React, { useEffect, useRef,useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "ScholarHub Website",
    description:
      "1. Users can apply for specific scholarships from the website 2. This website has three roles: normal users, an admin, and a moderator. 3. Moderators have permission to manage this website without managing users.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/sajib689/assignment-12-b9",
    previewUrl: "https://benevolent-hamster-c76181.netlify.app/",
    techStack: ["React", "Firebase", "TailwindCSS"],
  },
  {
    id: 2,
    title: "TouristaTrek Website",
    description:
      "1. Allows users to add and find information on tourist spots. 2. Provides comprehensive details on various tourist destinations. 3. Users can book any tourist spots from this website.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/sajib689/assignment-ten-client-b9.git",
    previewUrl: "https://inspiring-sprinkles-18cc70.netlify.app/",
    techStack: ["React", "Firebase", "TailwindCSS"],
  },
  {
    id: 3,
    title: "FoodHub Website",
    description:
      "1. A platform where people can donate extra food for those in need. 2. Users can easily find and collect food from specified locations. 3. Users can manage their food donations.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/sajib689/assignment-eleven-client-b9.git",
    previewUrl: "https://lighthearted-panda-b35522.netlify.app/",
    techStack: ["React", "Firebase", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Sajib Industrial Website",
    description:
      "1- A website where users can book industrial projects. 2. Streamlines the process of finding and securing industrial work. 3. Easily navigate through different sections, including Home, About Us.",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/sajib689/assignment-nine-client-b9.git",
    previewUrl:
      "https://661a8413740ddc95aede1b00--aquamarine-pasca-e8492a.netlify.app/",
    techStack: ["React", "Firebase", "TailwindCSS"],
  }
]

const ServiceSphereCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
 
  const cardVariants = {
    initial: { y: 50, opacity: 0, scale: 0.95 },
    animate: { y: 0, opacity: 1, scale: 1 },
  };
  const [projects, setProjects] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    
  console.log(projects)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/dashboard/projects"); 
        console.log(response)
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json(); 
        setProjects(data.projects);  
        setLoading(false);       
      } catch (error) {
        setError(error.message); 
        setLoading(false);      
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section id="projects" className="py-10 mt-10">
      {/* Title Section */}
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-center mb-8">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm mt-2 mb-5">
          Explore some of my recent projects that showcase my expertise in web
          <br /> development and problem-solving abilities.
        </p>
      </div>

      {/* Project Cards */}
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects?.map((project, index) => (
          <motion.li
            key={project?.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="group bg-[#18181B] p-6 rounded-xl shadow-lg max-w-sm mx-auto">
              {/* Image Wrapper with Scrolling Effect */}
              <div className="relative overflow-hidden h-40 rounded-lg">
                <Image
                width={500}
                height={300}
                  src={project?.image}
                  alt={`Preview of ${project?.title}`}
                  className="absolute top-0 w-full object-cover h-auto transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">{project?.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project?.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project?.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-6">
                <a
                  href={project?.previewUrl}
                  className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  View Details
                </a>
                <div className="flex gap-3">
                  <a href={project?.gitUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                    <FaGithub className="text-white text-lg cursor-pointer" />
                  </a>
                  <a href={project?.previewUrl} target="_blank" rel="noopener noreferrer" aria-label="Live project preview">
                    <FaExternalLinkAlt className="text-white text-lg cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceSphereCard;
