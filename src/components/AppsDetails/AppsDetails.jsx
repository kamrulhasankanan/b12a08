import React from "react";
import { useParams } from "react-router";
import useAppsData from "../../Hooks/useAppsData";
import { AiOutlineDownload } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { MdOutlineReviews } from "react-icons/md";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppsDetails = () => {
  const { id } = useParams();

  const { appsData, loading, error } = useAppsData();

  const app = appsData.find((a) => String(a.id) === id);

  if (loading) return <p className="text-2xl text-red-500">Loading.....</p>;

  const { image, title, description, size, downloads, ratingAvg, reviews } =
    app;

  const handleInstallApps = () => {
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate) return alert("App Installed");

      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("install", JSON.stringify(updatedList));
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <div>
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-[250px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-2 text-gray-400">
              Developed by{" "}
              <span className="text-[#632EE3] font-medium">productive.io</span>
            </p>
            <div className="grid grid-cols-3 gap-5 py-4">
              <div>
                <span className="text-3xl text-[#00d390]">
                  <AiOutlineDownload></AiOutlineDownload>
                </span>
                <p className="text-sm font-light">Download</p>
                <p className="text-2xl font-extrabold">{downloads}</p>
              </div>
              <div>
                <span className="text-3xl text-[#00d390]">
                  <FcRating></FcRating>
                </span>
                <p className="text-sm font-light">Average Ratings</p>
                <p className="text-2xl font-extrabold">{ratingAvg}</p>
              </div>
              <div>
                <span className="text-3xl text-[#00d390]">
                  <MdOutlineReviews></MdOutlineReviews>
                </span>
                <p className="text-sm font-light">Total Reviews</p>
                <p className="text-2xl font-extrabold">{reviews}</p>
              </div>
            </div>
            <button onClick={handleInstallApps} className="btn btn-secondary">
              Install Now ({size})
            </button>
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="space-y-3 p-15">
        <h3 className="text-2xl font-semibold">Ratings</h3>
        <div className="border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={app.ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width="auto"/>
              <Tooltip />
              <Legend />

              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="p-15">
        <h3 className="text-2xl font-semibold py-4">Description</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
