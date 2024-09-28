"use client";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatedHeader,
  AnimatedSmallText,
  AnimatedSection,
  AnimatedCard,
} from "@/lib/animations"; // Importing animated components

const Footer = () => {
  return (
    <footer className="bg-[#191B20] text-white pb-6 px-4 md:mx-0">
      <div className="max-w-7xl mx-auto">

        {/* Footer Links */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <AnimatedCard custom={1}>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={130} height={40} />
            </Link>
          </AnimatedCard>
          <AnimatedCard custom={2}>
            <h4 className="font-semibold mb-4">About Soulmaite</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </AnimatedCard>
          <AnimatedCard custom={3}>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Create your AI
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Client's Feedback
                </a>
              </li>
            </ul>
          </AnimatedCard>
          <AnimatedCard custom={4}>
            <h4 className="font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </AnimatedCard>
        </AnimatedSection>

        {/* Bottom Footer */}
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <AnimatedSmallText className="mb-4 md:mb-0">
            © 2024{" "}
            <a href="#" className="underline">
              Soulmaite
            </a>
            , all rights reserved.
          </AnimatedSmallText>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Legal notices
            </a>
          </div>
          <div className="flex space-x-4">
            <AnimatedCard custom={5}>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
            </AnimatedCard>
            <AnimatedCard custom={6}>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </AnimatedCard>
            <AnimatedCard custom={7}>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </AnimatedCard>
            <AnimatedCard custom={8}>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </AnimatedCard>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
