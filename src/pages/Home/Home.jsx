import React from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
import Banner from "../../components/Banner/Banner";
import useAppsData from "../../Hooks/useAppsData";

const Home = () => {
  
  const {appsData, loading, error} = useAppsData()
  

  const featuredAppsData = appsData.slice(0, 8);

  return (
    <div className="bg-base-200">
      <Banner></Banner>
      <div className="px-4 md:px-8 lg:px-12">
        <h1 className="text-5xl font-semibold text-center mb-4">
          Trending Apps
        </h1>
        <p className="text-[#627382] text-center mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-base-200">
          {featuredAppsData.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="text-center p-8">
          <Link className="btn bg-linear-[125.07deg,#632ee3,#9f62f2] text-white rounded-md" to="/appsItems">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
