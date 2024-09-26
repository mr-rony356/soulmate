"use client";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { Button } from "@/components/ui/button"; // Using shadcn button
import HeroSection from "./ui/HeroSection";
import Image from "next/image";
import HeaderText from "./ui/HeaderText";
import AvatarAdvantages from "./ui/AvatarAdvantage";
import FAQSection from "./ui/Faq";
import StaggeredAvatarGrid from "./ui/HeroSection";
import GenderToggleProfiles from "./components/GenderSection";
import PricingSection from "./components/Pricing";

const Home = () => {
  return (
    <div className="min-h-screen max-w flex flex-col justify-center mx-auto px-4 sm:px-[5%] py-12 lg:py-24 text-white overflow-x-hidden gap-20">
      <HeroSection />
      <GenderToggleProfiles />
      <PricingSection />
    </div>
  );
};

export default Home;
