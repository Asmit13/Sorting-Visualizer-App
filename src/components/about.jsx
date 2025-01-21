import React from "react";
import { FaRust, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import {
  SiGmail,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTensorflow,
} from "react-icons/si";
import { FaGithub, FaDocker, FaLinkedin, FaAws } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

      {/* Developer Image Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="./Asmit.jpg" // Replace with your image URL
          alt="Developer"
          className="w-36 h-36 rounded-full border-4 border-blue-500 mb-4"
        />
        <h2 className="text-2xl font-semibold">Asmit Aditya Singh</h2>
        <p className="text-lg text-gray-400">
          Full Stack Developer | AI/ML Enthusiast
        </p>
      </div>

      {/* About Description */}
      <div className="max-w-3xl text-center text-lg space-y-4">
        <p>
          Hi, I'm Asmit Aditya Singh, a passionate Full Stack Developer with a
          keen interest in Artificial Intelligence and Machine Learning. I enjoy
          solving complex problems and building innovative solutions.
        </p>
        <p>
          Currently, I’m pursuing a B.Tech in Computer Science at VIT Bhopal,
          where I’m honing my skills in various technologies, including React,
          Node.js, TensorFlow, and Python.
        </p>
        <p>
          I have worked on several projects, including AI-powered apps,
          cross-platform mobile apps, and complex algorithm-based solutions. My
          goal is to create efficient and user-friendly products that can make a
          positive impact.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-10 space-y-4">
        <h3 className="text-2xl font-semibold text-center">Skills</h3>
        <div className="flex justify-center space-x-6 mt-4 text-4xl">
          <SiMongodb className="text-green-500" title="Node.js" />
          <SiExpress title="Next.js" />
          <FaReact className="text-blue-600" title="React" />
          <FaNodeJs className="text-green-500" title="Node.js" />
          <SiNextdotjs title="Next.js" />
          <FaPython className="text-amber-300" title="Python" />
          <FaRust className="text-gray-400" title="Rust" />
          <FaAws className="text-amber-400" title="AWS" />
          <FaDocker className="text-blue-400" title="Docker" />
          <SiTensorflow className="text-amber-400" title="AWS" />
          ...
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold">Let’s Connect</h3>
        <p className="text-lg text-gray-400 mt-4">
          Feel free to reach out if you’d like to collaborate or chat about
          tech!
        </p>
        <div className="mt-4 flex justify-center space-x-6 gap-4">
          <a
            href="https://www.linkedin.com/in/asmit13/"
            className="flex items-center text-blue-400 hover:text-blue-600 space-x-2"
          >
            <FaLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Asmit13"
            className="flex items-center text-blue-400 hover:text-blue-600 space-x-2"
          >
            <FaGithub className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:asmitadsingh13@gmail.com"
            className="text-blue-400 hover:text-blue-600 flex items-center space-x-2"
          >
            <SiGmail className="w-6 h-6" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
