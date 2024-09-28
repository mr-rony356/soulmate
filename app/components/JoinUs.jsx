import React from "react";
import {
  AnimatedHeader,
  AnimatedSmallText,
  AnimatedSection,
} from "@/lib/animations";

const JoinUs = () => {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-[#191B20] to-[#2D1F3D] text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedHeader className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Join the millions who have discovered their perfect Soulmaite
          </span>
        </AnimatedHeader>

        <AnimatedSmallText className="text-lg md:text-xl text-gray-300 mb-8">
          Over <span className="font-semibold">5 million</span> users have
          experienced the warmth and connection of our AI companions. Start your
          journey today by leading your virtual relationship on{" "}
          <span className="font-semibold">WhatsApp</span> and discover your
          ideal Soulmaite.
        </AnimatedSmallText>

        <AnimatedSmallText>
          <button className="bg-white text-[#191B20] font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300">
            Find your Soulmaite now
          </button>
        </AnimatedSmallText>
      </div>
    </AnimatedSection>
  );
};

export default JoinUs;
