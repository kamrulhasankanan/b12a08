import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const appsData = useLoaderData();
  // console.log(appsData);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {appsData.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
