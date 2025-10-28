import React from "react";

const AppCard = ({app}) => {
  return (
    <div className="card bg-base-100 shadow-sm p-3">
      <figure>
        <img
          className="w-[316px] h-[316px] rounded-lg"
          src={app.image}
          alt="Apps Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>        
      </div>
      <div className="flex justify-between items-center">
        <p>{app.downloads}</p>
        <p>{app.ratingAvg}</p>
      </div>
    </div>
  );
};

export default AppCard;
