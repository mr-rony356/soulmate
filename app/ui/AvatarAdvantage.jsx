import React from "react";
import { FaCheckCircle, FaMagic, FaBolt, FaUser } from "react-icons/fa"; // Using react-icons for the icons
import HeaderText from "./HeaderText";
import { LuUser2 } from "react-icons/lu";
const AvatarAdvantages = () => {
  return (
    <section className="py-10 bg-[#E859B4] text-white text-center ">
      <HeaderText>AI Avatar advantages</HeaderText>

      <div className="flex flex-col lg:flex-row justify-center gap-6  items-center max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center gap-4">
          <LuUser2 className="text-4xl border-2 border-[#191B20] rounded-full p-2 bg-[#191B20] w-12 h-12 shadow-[0_4px_10px_rgba(0,0,0,0.5),_0_2px_6px_rgba(255,255,255,0.2)]" />
          <h3 className="text-2xl font-bold">Accurate AI avatars</h3>
          <p className="text-xl">
            Get high-quality avatars for social media, gaming, dating profiles,
            and more.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <FaMagic className="text-4xl border-2 border-[#191B20] rounded-full p-2 bg-[#191B20] w-12 h-12 shadow-[0_4px_10px_rgba(0,0,0,0.5),_0_2px_6px_rgba(255,255,255,0.2)]" />
          <h3 className="text-2xl font-bold">Variety of styles</h3>
          <p className="text-xl">
            Transform yourself and try new looks with 100+ diverse styles.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <FaBolt className="text-4xl border-2 border-[#191B20] rounded-full p-2 bg-[#191B20] w-12 h-12 shadow-[0_4px_10px_rgba(0,0,0,0.5),_0_2px_6px_rgba(255,255,255,0.2)]" />
          <h3 className="text-2xl font-bold">Quick generation</h3>
          <p className="text-xl">
            Creating a collection of avatars is quick – it only takes a few
            minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AvatarAdvantages;
