import React from "react";
import heroImage from "../../assets/hero.png";
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStore } from 'react-icons/fa';
const Banner = () => {
  return (
    <div className="bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg mt-8">
          <h1 className="text-5xl font-bold">We Build <br /><span className="text-[#9F62F2]">Productive</span> apps</h1>
          <p className="py-6">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          <button className="btn mr-3.5 font-bold"><FaGooglePlay></FaGooglePlay> Google Play</button>
          <button className="btn font-bold"><FaAppStore></FaAppStore> Apple Store</button>
        </div>
      </div>
      <div>
        <figure className="hero-content">
          <img src={heroImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
