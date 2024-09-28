import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import FaqItem from "../ui/FaqItem";
import { AnimatedHeader, AnimatedSmallText } from "@/lib/animations";
import Link from "next/link";
const faqData = [
  {
    question: "What is Soulmaite ?",
    answer:
      "Soulmaite is an innovative platform that facilitates personalized virtual relationships using advanced AI technology. Our AI companions provide emotional support and engaging interactions, simulating real relationships. Through WhatsApp, Soulmaite offers intimate, familiar, and convenient conversations. Designed to enhance your emotional well-being, our AI companions adapt to your preferences, ensuring meaningful and fulfilling virtual relationships that are always available and tailored to your needs.",
  },
  {
    question: "How do I personalize my Soulmaite ?",
    answer:
      "Personalizing your Soulmaite involves interacting with the AI companion and providing feedback on your preferences. As you engage in conversations, the AI learns your communication style, interests, and emotional needs, adjusting its responses accordingly. You can also set specific preferences in your profile settings to further customize your experience.",
  },
  {
    question: "What happens after I complete the payment ?",
    answer:
      "After completing your payment, you'll gain full access to your personalized Soulmaite AI companion. You'll receive instructions on how to connect with your Soulmaite through WhatsApp. From there, you can start engaging in conversations, exploring the features, and building your virtual relationship. Our support team will also be available to assist you with any questions or issues you might encounter.",
  },
  {
    question: "What happens after I complete the payment ?",
    answer:
      "After completing your payment, you'll gain full access to your personalized Soulmaite AI companion. You'll receive instructions on how to connect with your Soulmaite through WhatsApp. From there, you can start engaging in conversations, exploring the features, and building your virtual relationship. Our support team will also be available to assist you with any questions or issues you might encounter.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-4 bg-[#191B20] text-white">
      <AnimatedHeader className="text-center text-5xl font-bold mb-6">
        FAQs
      </AnimatedHeader>
      <AnimatedSmallText className="text-center text-lg text-gray-400 mb-12">
        Discover the Answers You Seek in Our Comprehensive FAQ Section{" "}
      </AnimatedSmallText>

      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="flex justify-center flex-col items-center  gap-6">
        <Link href={`/product/`}>
          <button className="mt-8 px-20 text-lg py-3 rounded-[32px]  transition text-[#D195C3] border">
            See more
          </button>
        </Link>
        <AnimatedHeader className="text-center text-5xl font-bold mb-2 mt-24">
          Still have questions ?
        </AnimatedHeader>
        <AnimatedSmallText className="text-center text-lg text-gray-400 mb-4">
          Don't worry, our team is ready to assist. Drop us a message, and we'll
          make sure you're on the right track.
        </AnimatedSmallText>
        <Link href={`/product/`}>
          <button className=" px-12 text-md py-3 rounded-[32px]  transition text-white  border">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
