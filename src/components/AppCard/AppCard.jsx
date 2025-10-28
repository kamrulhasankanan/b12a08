import React from "react";
import { AiOutlineDownload } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

const AppCard = ({app}) => {

  const {image, title, downloads, ratingAvg} = app;

  return (
    <div className="card bg-base-100 shadow-sm p-3 hover:scale-105 transition ease-in-out">
      <figure>
        <img
          className="w-[316px] h-[316px] rounded-lg"
          src={image}
          alt="Apps Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>        
      </div>
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-1"><AiOutlineDownload></AiOutlineDownload> {downloads}</p>
        <p className="flex items-center gap-1"><FaStar></FaStar> {ratingAvg}</p>
      </div>
    </div>
  );
};

export default AppCard;
