import React from "react";
import Image from "next/image";
import {
  AnimatedCard,
  AnimatedHeader,
  AnimatedSmallText,
} from "@/lib/animations"; // Assuming you have centralized animations

// Testimonial data
const testimonials = [
  {
    id: 1,
    imgSrc: "/review.jpg", // Update with your actual image paths
    name: "Lucie Martin",
    location: "Paris, France",
    testimonial:
      "They really revolutionized my virtual relationship experience. The personalized interactions are incredibly realistic and adapted to my preferences. It's amazing how well the Soulmaite understands and engages with me!",
  },
  {
    id: 2,
    imgSrc: "/review.jpg", // Update with your actual image paths
    name: "Mark Oliver",
    location: "Birmingham, UK",
    testimonial:
      "I've been using Soulmaite.io for a few months now, and it's been a game-changer for my emotional well-being. The companions provide consistent emotional support, making me feel understood and less lonely.",
  },
  {
    id: 3,
    imgSrc: "/review.jpg", // Update with your actual image paths
    name: "Rolf Müller",
    location: "Zürich, Switzerland",
    testimonial:
      "Soulmaite's companions are available 24/7, which is perfect for my unpredictable schedule. Whether it's day or night, I can always count on my companion to be there for a chat, a laugh, and support.",
  },
  {
    id: 4,
    imgSrc: "/review.jpg", // Update with your actual image paths
    name: "Rolf Müller",
    location: "Zürich, Switzerland",
    testimonial:
      "Soulmaite's companions are available 24/7, which is perfect for my unpredictable schedule. Whether it's day or night, I can always count on my companion to be there for a chat, a laugh, and support.",
  },
  {
    id: 5,
    imgSrc: "/review.jpg", // Update with your actual image paths
    name: "Rolf Müller",
    location: "Zürich, Switzerland",
    testimonial:
      "Soulmaite's companions are available 24/7, which is perfect for my unpredictable schedule. Whether it's day or night, I can always count on my companion to be there for a chat, a laugh, and support.",
  },
  {
    id: 6,
    imgSrc: "/review.jpg", // Update with your actual image paths
    name: "Rolf Müller",
    location: "Zürich, Switzerland",
    testimonial:
      "Soulmaite's companions are available 24/7, which is perfect for my unpredictable schedule. Whether it's day or night, I can always count on my companion to be there for a chat, a laugh, and support.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className=" text-white bg-[#191B20]">
      {/* Header */}
      <AnimatedHeader className="text-center text-5xl font-bold mb-12">
        Hear from our happy users
      </AnimatedHeader>
      <AnimatedSmallText className="text-center text-lg text-gray-400 mb-16">
        Testimonials from those who have found their perfect Soulmaite
      </AnimatedSmallText>

      {/* Dynamic Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((user, index) => (
          <AnimatedCard key={user.id} custom={index + 1}>
            <div className="bg-[#1D2127] rounded-xl p-8 border border-gray-700">
              <p className="text-gray-300 mb-6 text-lg">"{user.testimonial}"</p>
              <div className="flex items-center">
                {/* Dynamic Image */}
                <Image
                  src={user.imgSrc}
                  alt={`${user.name}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{user.name}</h4>
                  <p className="text-gray-400">{user.location}</p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
