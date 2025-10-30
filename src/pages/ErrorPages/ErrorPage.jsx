import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-base-200 min-h-screen p-20 flex items-center justify-center">
      <div className="card w-96 shadow-sm">
        <figure>
          <img
            src="/error404.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Oops, page not found!</h2>
          <p>
            The page you are looking for is not available.
          </p>
          <div className="card-actions justify-end">
            <Link to='/' className="btn btn-primary">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
