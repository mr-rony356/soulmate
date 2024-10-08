import React, { useState } from "react";
import {
  AnimatedCard,
  AnimatedHeader,
  AnimatedSection,
  AnimatedSmallText,
} from "@/lib/animations";
import { IoCheckmark } from "react-icons/io5";
const pricingPlans = [
  {
    name: "Basic plan",
    priceMonthly: "7.99",
    priceYearly: "79.99",
    originalPrice: "22.99",
    discount: "Save $15",
    features: [
      "3-days free trial",
      "Choose your relationship",
      "1,000 messages included / mo",
      "Ultra-realistic AI conversations",
      "Advanced AI responses",
    ],
    isPopular: false, // This will show the "Most Popular" tag
  },
  {
    name: "Standard plan",
    priceMonthly: "12.99",
    priceYearly: "129.99",
    originalPrice: "29.99",
    discount: "Save $20",
    features: [
      "3-days free trial",
      "Choose your relationship",
      "2,000 messages included / mo",
      "Ultra-realistic AI conversations",
      "Premium AI responses",
    ],
    isPopular: true,
  },
  {
    name: "Pro plan",
    priceMonthly: "19.99",
    priceYearly: "199.99",
    originalPrice: "39.99",
    discount: "Save $30",
    features: [
      "7-days free trial",
      "Choose your relationship",
      "Unlimited messages",
      "Ultra-realistic AI conversations",
      "Ultimate AI responses",
    ],
    isPopular: false,
  },
];
const PricingCard = ({ plan, billingCycle }) => {
  const price =
    billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

  return (
    <AnimatedCard className="h-full">
      {" "}
      {/* Add h-full here */}
      <div
        style={{
          backgroundImage: plan.isPopular
            ? "linear-gradient(rgb(167, 112, 239), rgb(253, 185, 155))"
            : "[#191B20]",
        }}
        className={`p-[2px] rounded-lg h-full flex flex-col ${
          plan.isPopular ? "" : "border"
        }`}
      >
        <div
          className={`${
            plan.isPopular ? "bg-[#191B20]" : "bg-[#191B20]"
          } p-8 rounded-lg flex flex-col flex-grow`}
        >
          {plan.isPopular && (
            <div className="text-sm font-semibold text-purple-600 bg-purple-200 px-2 py-1 rounded-full inline-block mb-4">
              🔥 Most Popular
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
          <p className="text-lg text-gray-400 mb-4">
            The ideal plan for a deeper connection with your Soulmate.
          </p>
          <div className="text-5xl font-bold mb-2">
            ${price}
            <span className="text-lg font-medium">/{billingCycle}</span>
          </div>
          <p className="text-sm line-through text-gray-500 mb-2">
            ${plan.originalPrice}/{billingCycle}
          </p>
          <p className="text-sm text-purple-400 mb-6">{plan.discount}</p>
          <button className="w-full py-3 rounded-3xl bg-[#D0D6DE] hover:bg-[#edf1f5] transition text-black mt-6">
            Get started
          </button>
          <ul className="mt-6 space-y-2 flex-grow">
            {" "}
            {/* Add flex-grow here */}
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className="text-lg text-white flex items-center gap-4 "
              >
                <IoCheckmark className="my-2" /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedCard>
  );
};

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <AnimatedSection
      className="relative mx-auto p-2 lg:p-6 text-[#D0D6DE] 
    before:content-[''] before:absolute before:inset-0 
    before:z-0 md:before:bg-[radial-gradient(circle,_#A971EE,_transparent_55%)] before:bg-[radial-gradient(circle,_#A971EE,_transparent_5%)] 
    before:w-[60%] before:h-[50%] before:left-[20%] before:top-[30%] 
    md:before:w-[80%] md:before:h-[70%] md:before:left-[10%] md:before:top-[20%]"
    >
      {/* Toggle between Monthly and Yearly pricing */}
      <AnimatedHeader className="relative z-10 text-center text-5xl font-bold mb-6 text-pink-300">
        Pricing Plan
      </AnimatedHeader>
      <AnimatedSmallText className="relative z-10 text-center text-lg mb-6 text-[#d0d6de]">
        Check out your ideal AI companion plan – Tailored to your needs!
      </AnimatedSmallText>

      <div className="relative z-10 flex justify-center text-[16px] mb-6 border max-w-fit rounded-3xl mx-auto bg-transparent">
        <span
          className={`px-6 lg:px-8 py-2 rounded-full cursor-pointer ${
            billingCycle === "monthly"
              ? "text-black bg-[#D0D6DE]"
              : "text-white"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </span>
        <span
          className={` px-6 lg:px-8 py-2 rounded-full ml-2 cursor-pointer ${
            billingCycle === "yearly" ? "text-black bg-[#D0D6DE]" : "text-white"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-fr">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} billingCycle={billingCycle} />
        ))}
      </div>
      <div className="relative z-10 text-center text-gray-400 mt-12 text-lg">
        Choose your ideal virtual AI companion and elevate your relationship
        with seamless WhatsApp interactions. Enjoy lifelike, personalized
        conversations tailored to your emotional and social needs. Begin your
        journey with Soulmaite today and experience the future of relationships!
      </div>
    </AnimatedSection>
  );
};

export default PricingSection;
