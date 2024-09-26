import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  AnimatedCard,
  AnimatedHeader,
  AnimatedSection,
} from "@/lib/animations";
import { PiGenderFemaleLight } from "react-icons/pi";
import { IoIosMale } from "react-icons/io";
import Link from "next/link";
// Simple seed-based random number generator
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const getRandomAge = (seed) => Math.floor(seededRandom(seed) * 23) + 18; // Ages 18-40

const femaleNames = ["Sophia", "Emma", "Olivia", "Ava", "Mia", "Isabella"];
const maleNames = ["Liam", "Noah", "Oliver", "William", "Elijah", "James"];

const ProfileCard = ({ name, gender, seed, custom }) => {
  const age = useMemo(() => getRandomAge(seed), [seed]);
  const description = `${name} is a ${age}-year-old ${
    gender === "female" ? "woman" : "man"
  } who enjoys life.`;
  const imageUrl = `/images/${gender}/base.png`; // Assuming images are stored in public/images/female or /male

  return (
    <AnimatedCard
      custom={custom} // You can pass the custom animation delay or trigger here
    >
      <div
        className="rounded-lg p-[2px] shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0), rgb(24, 27, 32) 97%), linear-gradient(285deg, rgb(167, 112, 239), rgb(253, 185, 155))",
        }}
      >
        <Link href={`/product/${gender}/${name}`}>
          <div className="bg-[#191B20] p-6 rounded-lg">
            <Image
              src={imageUrl}
              width={500}
              height={500}
              alt={name}
              className="mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
            <p className="text-gray-300">Age: {age}</p>
            <p className="text-gray-400 mt-2">{description}</p>
          </div>
        </Link>
      </div>
    </AnimatedCard>
  );
};

const GenderToggleProfiles = () => {
  const [selectedGender, setSelectedGender] = useState("female");

  return (
    <AnimatedSection className="mx-auto p-6">
      <div className="flex justify-center mb-6 space-x-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-semibold">
        <button
          className={`px-4 py-2 rounded-full flex items-center gap-2 shadow-md ${
            selectedGender === "female" ? "border" : ""
          }`}
          onClick={() => setSelectedGender("female")}
        >
          <PiGenderFemaleLight className="text-[#D195C3] w-8 h-6" /> Female
        </button>
        <button
          className={`px-4 py-2 rounded-full flex items-center gap-2 shadow-md ${
            selectedGender === "male" ? "border" : ""
          }`}
          onClick={() => setSelectedGender("male")}
        >
          <IoIosMale className="text-[#D195C3] w-8 h-6" /> Male
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {(selectedGender === "female" ? femaleNames : maleNames).map(
          (name, index) => (
            <ProfileCard
              key={name}
              name={name}
              gender={selectedGender}
              seed={selectedGender === "female" ? index : index + 100}
              custom={index} // Pass custom delay or stagger value for each card animation
            />
          )
        )}
      </div>
    </AnimatedSection>
  );
};

export default GenderToggleProfiles;
