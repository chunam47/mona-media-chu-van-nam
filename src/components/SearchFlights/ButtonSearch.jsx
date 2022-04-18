import React from "react";
import { Link } from "react-router-dom";

function ButtonSerach() {
  return (
    <div className="container relative bottom-52 flex justify-end -mb-44">
      <button
        type="submit"
        className="rounded-xl bg-blue-800 p-5 text-white text-lg"
      >
        <Link to="/search">
          {" "}
          Search Flights <i className="las la-arrow-right ml-12"></i>{" "}
        </Link>
      </button>
    </div>
  );
}

export default ButtonSerach;
