import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#191B20] py-4 text-center text-sm px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* AI Avatar description */}
        <div className="col-span-2 md:col-span-1 text-lg">
          <h3 className="text-white font-semibold text-xl">AI Avatar</h3>
          <p>
            AI Avatar is built & run by Picsart, the world's largest digital
            creation platform.
          </p>
        </div>

        {/* Picsart Tools */}
        <div className="text-lg flex flex-col items-start gap-2">
          <h3 className="text-white font-semibold text-xl">Picsart Tools</h3>
          <ul className="flex flex-col gap-2 items-start">
            <li>
              <Link
                href="/photo-editor"
                className="text-white hover:text-gray-300"
              >
                Photo Editor
              </Link>
            </li>
            <li>
              <Link
                href="/mobile-applications"
                className="text-white hover:text-gray-300"
              >
                Mobile applications
              </Link>
            </li>
            <li>
              <Link
                href="/quicktools"
                className="text-white hover:text-gray-300"
              >
                Quicktools
              </Link>
            </li>
            <li>
              <Link
                href="/developers"
                className="text-white hover:text-gray-300"
              >
                For developers
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="text-lg flex flex-col items-start gap-2">
          <h3 className="text-white font-semibold text-xl">About Us</h3>
          <ul className="flex flex-col gap-2 items-start">
            <li>
              <Link href="/careers" className="text-white hover:text-gray-300">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/press" className="text-white hover:text-gray-300">
                Press
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-white hover:text-gray-300">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Get the Free App */}
        <div className="text-lg flex flex-col items-start gap-2">
          <h3 className="text-white font-semibold text-xl">Get the Free App</h3>
          <div className="flex justify-center gap-2">
            <img src="/apple.svg" alt="App Store" className="w-24" />
            <img src="/play.svg" alt="Google Play" className="w-24" />
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-500 my-2"></div>

      <div className="flex justify-between items-center w-full text-sm max-w-6xl mx-auto mt-8">
        <div className="lnks text-sm ">
          <Link
            href="/privacy-policy"
            className="text-white hover:text-gray-300"
          >
            Privacy Policy
          </Link>{" "}
          |
          <Link
            href="/terms-of-service"
            className="text-white hover:text-gray-300"
          >
            {" "}
            Terms of Service
          </Link>
        </div>
        <p className=" text-white">© 2024 AI Avatar Clone Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
