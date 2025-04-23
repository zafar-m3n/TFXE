import React from "react";
import Icon from "@/components/ui/Icon";
import logoWhite from "@/assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="min-h-40 relative w-full flex flex-col items-center justify-center overflow-hidden border-t border-gray-300 mt-4 md:mt-6 lg:mt-8">
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start justify-between space-y-4">
            <img src={logoWhite} alt="TFXE Logo" className="w-1/3" />
            <div className="flex space-x-4">
              <Icon
                icon="mdi:twitter"
                width={36}
                className="p-2 rounded bg-orange-500 text-white hover:p-1 transition-all duration-300"
              />
              <Icon
                icon="mdi:facebook"
                width={36}
                className="p-2 rounded bg-orange-500 text-white hover:p-1 transition-all duration-300"
              />
              <Icon
                icon="mdi:linkedin"
                width={36}
                className="p-2 rounded bg-orange-500 text-white hover:p-1 transition-all duration-300"
              />
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold text-accent mb-6 underline underline-offset-8">Contact Us</h3>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center">
                <div className="aspect-square bg-accent text-white rounded-full p-2 flex justify-center items-center">
                  <Icon icon="heroicons:envelope" width={20} />
                </div>
                <span className="ml-4">support@tfxe.live</span>
              </div>
              <div>
                <h4 className="text-base font-semibold text-background mb-2">United Kingdom</h4>
                <div className="flex items-start mb-2">
                  <div className="aspect-square bg-accent text-white rounded-full p-2 flex justify-center items-center">
                    <Icon icon="heroicons:map-pin" width={20} />
                  </div>
                  <p className="ml-4 text-background">22 Broomfield Place, Stoven, United Kingdom.</p>
                </div>
                <div className="flex items-center">
                  <div className="aspect-square bg-accent text-white rounded-full p-2 flex justify-center items-center">
                    <Icon icon="heroicons:phone" width={20} />
                  </div>
                  <span className="ml-4 text-background">+44 7360 545857</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold text-accent mb-6 underline underline-offset-8">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/company/contact-us" className="hover:text-accent">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/company/about-us" className="hover:text-accent">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto text-justify text-gray-400 pt-8">
          <p>
            <span className="font-bold">Risk Warning: </span>
            Trading involves risks and does not guarantee future results. The contents of this site do not constitute
            financial advice. Simulated results have limitations and do not reflect real trading. We do not guarantee
            profits or the avoidance of losses. As technical analysis tool providers, we do not have access to client
            accounts or results. TFXE.live is a registered trademark of TFXE®, Inc., unrelated to our
            services.
          </p>
        </div>
        <div className="border-t border-gray-300 mt-8 py-4 flex justify-between flex-col-reverse md:flex-row items-center">
          <p>&copy; {new Date().getFullYear()} TFXE.live. All Rights Reserved.</p>
          <div className="flex space-x-4 my-2 md:my-0">
            <Link to="/terms" className="hover:text-accent">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
