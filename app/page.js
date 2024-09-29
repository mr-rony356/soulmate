"use client";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { Button } from "@/components/ui/button"; // Using shadcn button
import HeroSection from "./ui/HeroSection";
import Image from "next/image";
import HeaderText from "./ui/HeaderText";
import AvatarAdvantages from "./ui/AvatarAdvantage";
import StaggeredAvatarGrid from "./ui/HeroSection";
import GenderToggleProfiles from "./components/GenderSection";
import PricingSection from "./components/Pricing";
import HowItWorksSection from "./components/HowWorks";
import TestimonialsSection from "./components/Testimonial";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FaqSection";
import JoinUs from "./components/JoinUs";
import { Input } from "@/components/ui/input";
import {
  AnimatedHeader,
  AnimatedSmallText,
  AnimatedSection,
} from "@/lib/animations";

const Home = () => {
  return (
    <div className="w-full mx-auto max-w-screen-2xl">
      <div className="flex flex-col justify-center sm:px-[5%] py-12 lg:py-24 text-white overflow-x-hidden gap-20 xl:max-w-screen-2xl  px-4 md:mx-0">
        <HeroSection />
      </div>
      <div className="element-grad">
        <div className="flex flex-col justify-center sm:px-[5%] text-white overflow-x-hidden gap-20 xl:max-w-screen-2xl  px-4 md:mx-0">
          <GenderToggleProfiles />
          <PricingSection />
        </div>
      </div>

      <div className="flex flex-col justify-center sm:px-[5%] text-white overflow-x-hidden gap-20 xl:max-w-screen-2xl  px-4 md:mx-0">
        <HowItWorksSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
      </div>
      <div>
        <JoinUs />
      </div>
      <div className="flex flex-col justify-center sm:px-[5%] text-white overflow-x-hidden  py-12 gap-20 xl:max-w-screen-2xl  px-4 md:mx-0">
        {/* Newsletter Subscription */}
        <AnimatedSection className="bg-[#1D2127] rounded-lg p-6  flex flex-col md:flex-row justify-between">
          <div>
            <AnimatedHeader className="text-lg font-semibold mb-2 text-center">
              Subscribe to our newsletter
            </AnimatedHeader>
            <AnimatedSmallText className="text-gray-400 mb-4 text-[16px] text-center">
              Don't miss out on what's new - join our community today!
            </AnimatedSmallText>
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your e-mail addresses"
                className="bg-transparent border min-w-[256px] border-gray-700 rounded-xl h-12 px-6 !py-4 focus:outline-none w-full focus:ring-2 focus:ring-purple-500 text-[16px]"
              />
              <button className="border text-white py-2 px-6 rounded-full transition-colors duration-300">
                Subscribe
              </button>
            </div>

            <AnimatedSmallText className="text-sm text-gray-400 mt-6">
              By subscribing you agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </AnimatedSmallText>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;
