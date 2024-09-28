"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  AnimatedHeader,
  AnimatedSmallText,
  AnimatedSection,
  AnimatedCard,
} from "@/lib/animations"; // Adjust the path as necessary

// Sample images
const userImages = [
  "/images/male/base.png",
  "/images/male/base.png",
  "/images/male/base.png",
  "/images/male/base.png",
  "/images/male/base.png",
];
const femaleNames = ["Sophia", "Emma", "Olivia", "Ava", "Mia", "Isabella"];
const maleNames = ["Liam", "Noah", "Oliver", "William", "Elijah", "James"];

// Simple helper to check if the name exists in our data
const getUserData = (gender, name) => {
  const names = gender === "female" ? femaleNames : maleNames;
  if (names.includes(name)) {
    const imageUrl = `/images/${gender}/base.png`; // Assuming the image is in this structure
    const seed = names.indexOf(name);
    const age = Math.floor(Math.sin(seed) * 23) + 18;
    const description = `${name} is a ${age}-year-old ${
      gender === "female" ? "woman" : "man"
    } who enjoys life.`;
    return { name, age, description, imageUrl };
  }
  return null;
};

const ProfilePage = () => {
  const [relationshipType, setRelationshipType] = useState("");
  const [plan, setPlan] = useState("");
  const { gender, name } = useParams(); // Capture gender and name from the URL
  const userData = getUserData(gender, name);
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!userData) {
    return <p className="text-white">User not found</p>;
  }

  const handleImageClick = (index) => {
    setLightboxIndex(index); // Set the index of the clicked image
    setLightboxOpen(true); // Open the lightbox
  };

  return (
    <div className=" min-h-screen bg-[#1D2127] mt-8 mx-4   p-6 md:p-12 lg:p-12 max-w-screen-xl rounded-xl shadow-lg  px-4 md:mx-0">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex justify-center lg:justify-start lg:w-1/2">
          <div className=" rounded-lg max-w-md mx-auto  ">
            <AnimatedHeader className="text-4xl mb-6 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {userData.name}
            </AnimatedHeader>
            <AnimatedSection className="mx-auto lg:p-6">
              <Image
                src={userData.imageUrl}
                width={500}
                height={500}
                alt={userData.name}
                className="lg:mb-4 rounded-3xl mb-2"
              />
            </AnimatedSection>

            {/* Additional Images */}
            <div className="grid grid-cols-4 gap-4 md:gap-0 md:pl-4  my-4 mb-20 md:mb-0">
              {userImages.slice(1).map((image, idx) => (
                <Image
                  key={idx}
                  src={image}
                  width={100}
                  height={300}
                  alt={`${userData.name} - Additional Image ${idx + 1}`}
                  className="rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(idx + 1)}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Right Section - Subscription Panel */}
        <AnimatedSection>
          <div
            className="rounded-lg p-[2px] shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(rgb(167, 112, 239), rgb(253, 185, 155))",
            }}
          >
            <div className="bg-[#1e1e2a] rounded-lg p-8 max-w-lg">
              <AnimatedHeader className="text-4xl text-white mb-4 font-[300] tracking-wide">
                $ 4.99 USD
              </AnimatedHeader>
              <AnimatedSmallText className="text-[#d0d6de] mb-4 text-lg">
                Let&apos;s personalize your selected AI&apos;s psychological
                aspects
              </AnimatedSmallText>
              <AnimatedSmallText className="text-purple-400 font-bold my-6 ">
                3-days free trial
              </AnimatedSmallText>

              {/* Type of Relationship Dropdown */}
              <label className="block mb-2 text-gray-300">
                Type of Relationship
              </label>
              <select
                value={relationshipType}
                onChange={(e) => setRelationshipType(e.target.value)}
                className="w-full p-3 rounded-[24px] bg-gray-800 text-gray-300 mb-4 focus:outline-none"
              >
                <option disabled value="">
                  Type of Relationship
                </option>
                <option value="friend">Friend</option>
                <option value="romantic">Romantic</option>
              </select>

              {/* Plan Dropdown */}
              <label className="block mb-2 text-gray-300">
                Choose your Plan
              </label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full p-3 rounded-3xl bg-gray-800 text-gray-300 mb-4 focus:outline-none"
              >
                <option disabled value="">
                  Choose your Plan
                </option>
                <option value="monthly">Monthly - $4.99</option>
                <option value="yearly">Yearly - $49.99</option>
              </select>

              {/* Subscribe Button */}
              <button
                className="w-full py-3 rounded-3xl bg-[#D0D6DE] hover:bg-[#edf1f5] transition text-black  mt-6"
                onClick={() => alert("Subscribed!")}
              >
                Subscribe now
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Lightbox */}
        {lightboxOpen && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={userImages.map((src) => ({ src }))}
            index={lightboxIndex}
          />
        )}
      </div>
      <div>
        <AnimatedSmallText className=" text-center mt-12 text-lg text-[#D0D6DE]">
          {userData.description}
        </AnimatedSmallText>
      </div>
    </div>
  );
};

export default ProfilePage;
