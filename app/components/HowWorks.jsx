import React from "react";
import Image from "next/image";
import {
  AnimatedCard,
  AnimatedHeader,
  AnimatedSmallText,
} from "@/lib/animations";

// Card data to make it dynamic
const cards = [
  {
    id: 1,
    imgSrc: "/one.png",
    title: "Choose your Soulmate",
    description:
      "Choose the companion that best matches your physical preferences and needs.",
  },
  {
    id: 2,
    imgSrc: "/two.png",
    title: "Create your account",
    description:
      "Create your account with an email address and password, or set up an account with Google, Facebook, or Apple.",
  },
  {
    id: 3,
    imgSrc: "/three.png",
    title: "Define your relationship",
    description:
      "Choose the soulmate of your dreams. Let your fantasies speak for themselves and choose from the available profiles.",
  },
  {
    id: 4,
    imgSrc: "/four.png",
    title: "Step Four",
    description: "Description for the fourth step.",
  },
  {
    id: 5,
    imgSrc: "/five.png",
    title: "Step Five",
    description: "Description for the fifth step.",
  },
  {
    id: 6,
    imgSrc: "/six.png",
    title: "Step Six",
    description: "Description for the sixth step.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className=" p-4 lg:p-16 text-white">
      {/* Header */}
      <AnimatedHeader className="text-center text-5xl font-bold mb-24">
        How does it work?
      </AnimatedHeader>

      {/* Dynamic Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        {cards.map((card, index) => (
          <AnimatedCard key={card.id} custom={index + 1}>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0), rgb(24, 27, 32) 97%), linear-gradient(285deg, rgb(167, 112, 239), rgb(253, 185, 155))",
              }}
              className="p-[2px] rounded-xl"
            >
              <div className="p-6 rounded-lg bg-[#191B20]">
                <div className="text-center">
                  {/* Dynamic image */}
                  <Image
                    src={card.imgSrc}
                    alt={`Card ${card.id}`}
                    width={150} // Adjust the width and height as needed
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <AnimatedSmallText className="text-xl font-semibold">
                    {card.title}
                  </AnimatedSmallText>
                  <p className="text-gray-400 mt-2">{card.description}</p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
