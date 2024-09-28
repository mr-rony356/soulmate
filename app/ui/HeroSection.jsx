// components/Hero.js
import React from "react";
import Image from "next/image";
import {
  AnimatedHeader,
  AnimatedSmallText,
  AnimatedSection,
  AnimatedCard,
} from "@/lib/animations";

const Hero = () => {
  return (
    <AnimatedSection className="relative text-white flex flex-col items-center justify-between">
      {/* Hero Image */}
      <div className="w-full relative lg:h-[340px] h-[200px]">
        <Image
          src="/herobg.png" // Replace with your actual image path
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="rounded-lg"
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center  lg:max-w-2xl w-full">
        <AnimatedHeader className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-6 ">
          Rediscover virtual relationships
        </AnimatedHeader>
        <AnimatedSmallText className="text-lg mt-10 text-gray-400">
          Select your ideal <strong>AI companion</strong> and enjoy
          personalized, lifelike <strong>conversations</strong> directly{" "}
          <strong>on WhatsApp</strong>.
        </AnimatedSmallText>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
