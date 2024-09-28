"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const start = window.pageYOffset;
      const end =
        sectionId === "top"
          ? 0
          : section.getBoundingClientRect().top + window.pageYOffset - 50;
      const duration = 1000;

      const startTime = performance.now();

      function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = easeInOutCubic(progress);
        window.scrollTo(0, start + (end - start) * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }
  };

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  const languages = ["EN", "FR", "DE", "ES"];
  return (
    <header className="sticky top-0 left-0 right-0 z-[99] bg-[#191B20] text-[#fefefd] h-20 px-[5%]">
      <div className="flex justify-between items-center w-full h-full">
        {/* Logo */}
        <div className="flex items-center space-x-12 ">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={130} height={40} />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-[17px]  font-light !leading-[24px]">
            <Link href="/home">Home</Link>
            <Link href="/ai-catalog">AI Catalog</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/your-feedback">Your feedback</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>

        {/* User Icon and Language Switch */}
        <div className="hidden md:flex items-center space-x-6">
          <FaUserCircle className="text-white text-2xl cursor-pointer " />
          <div
            className="relative flex items-center cursor-pointer text-sm "
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Image
              src="/uk.svg"
              alt="UK Flag"
              width={14}
              height={14}
              className="mr-2 hover:bg-white"
            />
            <span>EN</span>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-6 -right-2 bg-[white] border text-black border-gray-600 p-2 rounded-md space-y-2 text-sm  px-4 font-semibold"
                >
                  <div className="flex items-center space-x-2 cursor-pointer justify-center">
                    <Image src="/uk.svg" alt="US Flag" width={16} height={16} />
                    <span className="hover:text-[#C488D3]">EN</span>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer justify-center">
                    <Image
                      src="/uk.svg"
                      alt="France Flag"
                      width={16}
                      height={16}
                    />
                    <span>FR</span>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer justify-center">
                    <Image
                      src="/uk.svg"
                      alt="Germany Flag"
                      width={16}
                      height={16}
                    />
                    <span>DE</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden  flex items-center justify-center gap-6">
          <FaUserCircle  size={26} className="text-white text-xl cursor-pointer " />

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#191B20] fixed top-[80px] left-0 right-0 overflow-hidden pl-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-start space-y-8 pt-8  text-[#fefefd]  text-xl"
            >
              <Link href="/home" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/ai-catalog" onClick={() => setIsOpen(false)}>
                AI Catalog
              </Link>
              <Link href="/how-it-works" onClick={() => setIsOpen(false)}>
                How it works
              </Link>
              <Link href="/your-feedback" onClick={() => setIsOpen(false)}>
                Your feedback
              </Link>
              <Link href="/pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </motion.div>
            <div className="flex items-center justify-center space-x-4 mt-8 text-[#C488D3]">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`text-lg pb-2  ${
                    selectedLang === lang ? "underline" : ""
                  }`}
                  onClick={() => setSelectedLang(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
