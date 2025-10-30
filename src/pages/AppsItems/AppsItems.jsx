import React, { useState } from "react";
import useAppsData from "../../Hooks/useAppsData";
import AppCard from "../../components/AppCard/AppCard";
import { Link } from "react-router";

const AppsItems = () => {
  const { appsData } = useAppsData();

  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? appsData.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : appsData;

  if (!searchedApps.length) return <p className="text-5xl text-center min-h-screen bg-base-200 p-50 font-bold">Opps, No Apps Found ! <Link to='/' className="btn btn-primary">Go Back</Link></p>

  return (
    <div className="px-4 md:px-8 lg:px-12 bg-base-200">
      <h1 className="text-5xl font-semibold text-center py-8">
        Our All Applications
      </h1>
      <p className="text-[#627382] text-center mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center py-5">
        <h1 className="font-semibold text-xl">
          <span>({searchedApps.length})</span> Apps Found
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-base-200">
        {searchedApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default AppsItems;
