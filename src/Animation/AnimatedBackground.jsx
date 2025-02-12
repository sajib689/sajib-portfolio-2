"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Particle Component
function Particle({ x, y }) {
  return (
    <motion.div
      className="absolute w-6 h-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-75"
      style={{ top: `${y}px`, left: `${x}px` }}
      animate={{
        scale: [0.5, 1.2, 0.5],
        opacity: [1, 0, 1],
        y: [y, y + Math.random() * 200 - 100, y],
        x: [x, x + Math.random() * 300 - 150, x],
      }}
      transition={{
        repeat: Infinity,
        duration: Math.random() * 2 + 2,
        ease: "easeInOut",
        repeatType: "loop",
      }}
    />
  );
}

// Animated Background with Glowing Particles
function AnimatedBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      setParticles((prevParticles) => [...prevParticles, { x, y }]);
    };

    const interval = setInterval(createParticle, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full">
        {particles.map((particle, index) => (
          <Particle key={index} x={particle.x} y={particle.y} />
        ))}
      </div>
    </motion.div>
  );
}

export default AnimatedBackground;
