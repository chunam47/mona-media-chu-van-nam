import React, { useState } from "react";
import Bag from "../icons/baggage.svg";
import Meal from "../icons/meal.svg";
import Time from "./Time";
function FlightInfo(props) {
  const [tab, setTab] = useState("detail");
  const {
    airlines,
    baggage,
    inFlight,
    departureTime,
    flightDuration,
    landingTime,
    from,
    to,
    discountPrice,
    price,
  } = props.data;

  return (
    <div className="cursor-pointer">
      <div className="md:flex block justify-between">
        {/* <!-- Airlines --> */}
        <div className="lg:flex block">
          <div className="flex">
            <img
              src={airlines.logo}
              alt="logobambo"
              className="w-7 h-7 rounded-lg border-2"
            />
            <h1 className="ml-3 uppercase">{airlines.name}</h1>
          </div>
          {/* <!-- Time --> */}
          <div className="flex xl:pl-10 lg:pl-2 pl-0 md:justify-start justify-between md:py-0 py-5">
            <Time time={departureTime} provice={from.shortName} />
            <div className="mr-9 text-center">
              <h1 className="text-sm leading-5">{flightDuration}</h1>
              <span></span>
              <span className="text-xs leading-4">Direct</span>
            </div>
            <Time time={landingTime} provice={to.shortName} />
          </div>
        </div>
        {/* <!-- Baggage --> */}
        <div>
          <div className="flex">
            <img src={Bag} alt="" className="mr-2" />
            <h1>
              Baggage{" "}
              <span className="text-blue-700 font-semibold">{baggage}</span>
            </h1>
          </div>
          <div className="flex">
            <img src={Meal} alt="" className="mr-2" />
            <h1>
              In-flight{" "}
              <span className="text-blue-700 font-semibold">{inFlight[0]}</span>
            </h1>
          </div>
        </div>
        {/* <!-- price --> */}
        <div className="md:py-0 py-5">
          <h1 className="line-through text-gray-400">{price}</h1>
          <h1 className="text-orange-600 font-bold">{discountPrice}</h1>
        </div>
        {/* <!-- Choose --> */}
        <div>
          <button
            type="submit"
            className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-semibold"
          >
            Choose
          </button>
        </div>
      </div>
      <div className="flex mt-7 mb-4">
        <button
          className={
            tab === "detail"
              ? "uppercase text-xs text-gray-400 mr-7 border-b-2 border-b-blue-900 pb-1"
              : "uppercase text-xs text-gray-400 mr-7 pb-1"
          }
          onClick={(e) => {
            e.stopPropagation();
            setTab("detail");
            props.setTabAcc("detail");
          }}
        >
          Flight detail
        </button>
        <button
          className={
            tab === "fare"
              ? "uppercase text-xs text-gray-400 border-b-2 border-b-blue-900 pb-1"
              : "uppercase text-xs text-gray-400 pb-1"
          }
          onClick={(e) => {
            e.stopPropagation();
            setTab("fare");
            props.setTabAcc("fare");
          }}
        >
          Fare info
        </button>
      </div>
    </div>
  );
}

export default FlightInfo;
