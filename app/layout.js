// app/layout.js or layout.tsx

import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased mt-8 bg-[#191B20]`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTop /> {/* Use ScrollToTop component */}
      </body>
    </html>
  );
}
