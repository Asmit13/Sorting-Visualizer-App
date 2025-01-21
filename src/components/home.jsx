import Spline from "@splinetool/react-spline";
import {
  SiPaloaltonetworks,
  SiReact,
  SiCss3,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 150) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Full-Screen Spline Animation */}
      <div className="relative w-full h-screen">
        <Spline
          scene="https://prod.spline.design/gs18hTKBflCxVoyN/scene.splinecode"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute bottom-4 right-4 bg-slate-600 text-white px-6 py-2 rounded-lg shadow-lg text-lg font-semibold flex items-center space-x-2">
          <span>Sorting Visualizer</span>
          <SiPaloaltonetworks className="w-6 h-6 text-indigo-600" />
        </div>
      </div>

      <section className="py-16 text-center relative z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-900 "
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolling ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.h1
          className="text-5xl font-bold text-white mb-4 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolling ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Welcome to the Sorting Visualizer
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolling ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          Explore different sorting algorithms and watch them come to life in
          real-time. Interactive and informative!
        </motion.p>
      </section>

      <section
        className={`py-16 bg-gray-800 transition-all duration-500 ease-in-out ${
          scrolling
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <motion.h2
          className="text-4xl text-center font-semibold text-indigo-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolling ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Available Algorithms
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Bubble Sort",
              description:
                "A simple algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if necessary.",
              link: "/sort",
              icon: <SiReact className="w-8 h-8 text-indigo-400" />,
            },
            {
              name: "Insertion Sort",
              description:
                "Builds the final sorted array one item at a time, inserting the next element into its correct position.",
              link: "/sort",
              icon: <SiCss3 className="w-8 h-8 text-indigo-400" />,
            },
            {
              name: "Selection Sort",
              description:
                "Selects the smallest element from the unsorted portion and moves it to the sorted portion.",
              link: "/sort",
              icon: <SiJavascript className="w-8 h-8 text-indigo-400" />,
            },
            {
              name: "Merge Sort",
              description:
                "Splits the list into two halves, sorts them, and merges them back together.",
              link: "/sort",
              icon: <SiPython className="w-8 h-8 text-indigo-400" />,
            },
            {
              name: "Quick Sort",
              description:
                "Uses a divide-and-conquer approach to partition and sort the list.",
              link: "/sort",
              icon: <SiReact className="w-8 h-8 text-indigo-400" />,
            },
          ].map(({ name, description, link, icon }) => (
            <motion.div
              key={name}
              className="bg-gray-700 p-8 mx-5 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: scrolling ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
                {name}
              </h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <Link to={link} className="text-indigo-600 hover:underline">
                Visualize {name}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-900 ">
        <motion.h2
          className="text-4xl text-center font-semibold text-indigo-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Future Algorithms
        </motion.h2>
        <div className="text-center text-lg text-gray-400">
          <p>
            We’re constantly adding more sorting algorithms for you to explore,
            including:
          </p>
          <ul className="mt-4 text-indigo-400 list-disc list-inside">
            <li>Heap Sort</li>
            <li>Bucket Sort</li>
            <li>Radix Sort</li>
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-center">
        <p className="text-sm text-gray-400">
          © 2025 Sorting Visualizer App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
