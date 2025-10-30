import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;

  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 shadow-sm p-3 hover:scale-105 transition ease-in-out">
        <figure>
          <img
            className="w-[316px] h-[316px] rounded-lg"
            src={image}
            alt="Apps Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-1 text-[#00d390] font-semibold">
            <AiOutlineDownload></AiOutlineDownload> {downloads}
          </p>
          <p className="flex items-center gap-1 text-[#FF8811] font-semibold">
            <FaStar></FaStar> {ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
