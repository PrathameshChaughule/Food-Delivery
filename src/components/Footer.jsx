import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full h-full bg-black text-white">
      <div className="max-w-[1134px] m-auto mx-9 pt-13 pb-10 gap-5 flex lg:flex-row flex-col justify-between">
        <div className="lg:w-xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 py-5">
            Best <span className="font-bold">Eats</span>
          </h1>
          <p className="md:w-150 lg:w-lg ml-3 pb-6">
            At Best Eats, we pride ourselves on delivering meals quickly.
            Whether craving a burger, salad, or pizza, our menu features local
            options, ensuring every meal is delightful. Enjoy ordering from
            home!
          </p>
          <div className="ml-3 flex text-2xl gap-3 text-orange-600">
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
        <div className="flex justify-between gap-10 sm:gap-15 py-8 list-none flex-wrap">
          <div>
            <h4 className="text-xl">Navigation</h4>
            <li>Home</li>
            <li>About Us</li>
            <li>Restaurant</li>
            <li>Blog</li>
            <li>Contact</li>
          </div>
          <div>
            <h4 className="text-xl">Resources</h4>
            <li>Blog</li>
            <li>service</li>
            <li>FAQs</li>
            <li>Pricing & Plans</li>
          </div>
          <div>
            <h4 className="text-xl">Payment</h4>
            <li>Visa</li>
            <li>MasterCard</li>
            <li>PayPal</li>
          </div>
        </div>
      </div>
      <hr className="max-w-[1134px] m-auto" />
      <div className="text-center py-5">
        <p>
          &copy; 2025 Speedy Eats. All rights reserved. Designed by{" "}
          <span className="text-orange-600">PrathameshC</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
