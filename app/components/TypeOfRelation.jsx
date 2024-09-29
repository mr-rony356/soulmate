import React from "react";
import {
  AnimatedHeader,
  AnimatedCard,
  AnimatedSection,
} from "@/lib/animations";

const relationships = [
  {
    title: "Friendly",
    description:
      "Find a loyal friend for genuine companionship and support. Enjoy endless and funny conversations and shared interests.",
    icon: "/friends.png", // Replace with correct icon path
  },
  {
    title: "Romantic",
    description:
      "Experience deep, romantic connections with a companion who understands and fulfills your emotional needs.",
    icon: "/love.png", // Replace with correct icon path
  },
  {
    title: "Sexual",
    description:
      "Explore intimate, sensual interactions with a partner designed to meet your deepest desires and fantasies.",
    icon: "/sexual.png", // Replace with correct icon path
  },
  {
    title: "Mentor",
    description:
      "Gain valuable guidance and advice from a mentor tailored to help you achieve your personal and professional goals.",
    icon: "/mentor.png", // Replace with correct icon path
  },
];

const RelationshipTypes = () => {
  return (
    <section
      className="py-12"
      style={{
        backgroundImage:
          "linear-gradient(rgb(0, 0, 0, 0 ), rgba(19, 21, 25, 0.78) 90%, rgb(24, 27, 32)), url(https://cdn.prod.website-files.com/664ba4a670588e767b305203/664ba4a670588e767b30528a_Ellipse%20BG.png)",
      }}
    >
      {/* Header */}
      <AnimatedHeader className="text-center text-4xl font-bold mb-10">
        Types of Relationships
      </AnimatedHeader>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relationships.map((relationship, index) => (
          <AnimatedCard
            key={relationship.title}
            className="bg-[#1D2127] p-6 rounded-lg text-white"
            custom={index} // Pass index for delayed animation
          >
            <div className="flex items-start gap-4">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(167, 112, 239), rgb(253, 185, 155))",
                }}
                className=" mb-4 p-[1px] rounded-xl w-[35%] lg:w-[85%] h-[25%] "
              >
                <img
                  src={relationship.icon}
                  alt={relationship.title}
                  className="w-12 h-12 p-3 bg-[#1D2127]  rounded-xl"
                />
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  {relationship.title}
                </h3>
                <p className="text-sm">{relationship.description}</p>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
};

export default RelationshipTypes;
