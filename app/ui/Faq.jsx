import React from "react";
import FaqItem from "./FaqItem";
import HeaderText from "./HeaderText";

const faqData = [
  {
    question: "What is AI avatar?",
    answer:
      "AI avatars are portraits created by artificial intelligence. Our machine learning algorithms generate digital portraits based on the pictures you upload.",
  },
  {
    question: "How to create an avatar?",
    answer:
      "Creating an avatar is simple. Upload your best photo, choose from a variety of styles, and let the AI generate your avatar within minutes.",
  },
  {
    question: "What styles can I choose for my avatar?",
    answer:
      "You can select from a diverse array of styles, such as realistic, cartoonish, artistic, and many more creative options to match your preferences.",
  },
  {
    question: "Is the AI Avatar Generator free to use?",
    answer:
      "Generating avatars requires credits, but each user starts with 20 free credits to explore and create their avatars.",
  },
  {
    question: "What file formats are available for the generated avatars?",
    answer:
      "Your generated avatars can be downloaded in PNG or JPG format, optimized for use on social media or personal profiles.",
  },
  {
    question: "Can I convert my image into an avatar?",
    answer:
      "Yes, you can easily convert any image into an AI-generated avatar using our avatar creation tool.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-10 bg-[#191B20] text-white">
      <HeaderText>AI Avatar Generator FAQ</HeaderText>
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
