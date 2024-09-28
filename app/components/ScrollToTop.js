// components/ScrollToTop.js
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopButton && (
        <motion.button
          className="fixed bottom-8 right-2 lg:right-8 p-4 bg-transparent border text-white rounded-full shadow-lg z-50 transition-all"
          onClick={scrollToTop}
          whileHover={{
            scale: 1.1,
          }}
        >
          <div className="relative w-8 h-8 lg:w-14 lg:h-14 flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full rounded-full border-4  opacity-50 animate-spin-slow"></div>
            <div className="absolute inset-0 w-full h-full rounded-full border-2 "></div>
            <ChevronUp className="text-white" size={24} />
          </div>
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;
