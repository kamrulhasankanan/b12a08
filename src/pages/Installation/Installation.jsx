import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FcRating } from "react-icons/fc";


const Installation = () => {
  const [install, setInstall] = useState([]);

  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("install"));
    if (savedList) setInstall(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "reviews-asc") {
      return [...install].sort((a, b) => a.reviews - b.reviews);
    } else if (sortOrder === "reviews-desc") {
      return [...install].sort((a, b) => b.reviews - a.reviews);
    } else {
      return install;
    }
  })();


  const handleRemoveApp = (id)=> {
    const existingList = JSON.parse(localStorage.getItem('install'))
    let updatedList = existingList.filter(a=> a.id !== id)

    setInstall(updatedList)    
    localStorage.setItem('install', JSON.stringify(updatedList))
  }


  return (
    <div className="bg-base-200 min-h-screen p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold py-4">Your Installed Apps</h1>
        <p className="text-sm text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center py-5">
        <h1 className="font-semibold text-xl">
          <span>({sortedItem.length})</span> Apps Found
        </h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Reviews</option>
            <option value="reviews-asc">Low-&gt;High</option>
            <option value="reviews-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedItem.map((a) => (
          <div key={a.id} className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={a.image}
                alt={a.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{a.title}</h2>
              <div className="grid grid-cols-3 gap-5 py-4 max-w-[150px]">
                <div className="flex justify-between items-center">
                  <span className="text-xl text-[#00d390]">
                    <AiOutlineDownload></AiOutlineDownload>
                  </span>
                  <p className="text-sm text-[#00d390]">{a.downloads}</p>
                </div>
                <div className="flex justify-between items-center gap-1">
                  <span className="text-sm">
                    <FcRating></FcRating>
                  </span>
                  <p className="text-sm text-[#FF8811]">{a.ratingAvg}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{a.reviews}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center pr-4">
              <button onClick={()=>handleRemoveApp(a.id)} className="btn btn-success text-white">Uninstall</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
