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
      <div className="bg-linear-[125.07deg,#632ee3,#9f62f2] text-center p-10 mb-20">
        <h1 className="text-white font-bold mb-8 text-4xl">Trusted by Millions, Built for You</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="text-white">
                <h4>Total Downloads</h4>
                <h1 className="text-6xl font-bold p-4">29.6M</h1>
                <p>21% more than last month</p>
            </div>
            <div className="text-white">
                <h4>Total Reviews</h4>
                <h1 className="text-6xl font-bold p-4">906K</h1>
                <p>46% more than last month</p>
            </div>
            <div className="text-white">
                <h4>Active Apps</h4>
                <h1 className="text-6xl font-bold p-4">132+</h1>
                <p>31 more will Launch</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
