import React from "react";

function Detail(props) {
  const {
    airlines,
    baggage,
    inFlight,
    departureTime,
    departureDate,
    landingTime,
    landingDate,
    from,
    to,
    flightCode,
    flightClass,
    aircraft,
    seat,
    seatPitch,
    flightDuration,
  } = props.data;
  const { isShow } = props;
  return (
    <div style={{ display: isShow ? "block" : "none" }}>
      <div className="sm:grid sm:grid-cols-8 block">
        <div className="flex col-span-3 ">
          <div className="flex flex-col justify-between mr-8">
            <div className="">
              <h1 className="text-sm leading-5 font-semibold">
                {departureTime}
              </h1>
              <span className="text-xs leading-4 font-normal">
                {departureDate}
              </span>
            </div>
            <div className=" text-sm leading-5 font-normal">
              <span>{flightDuration}</span>
            </div>
            <div>
              <h1 className="text-sm leading-5 font-semibold">{landingTime}</h1>
              <span className="text-xs leading-4 font-normal">
                {landingDate}
              </span>
            </div>
          </div>
          <div>
            <span>line</span>
          </div>
          <div className="ml-8 flex flex-col justify-between">
            <div>
              <h1 className="text-sm leading-5 font-semibold">
                {from.fullName}"({from.shortName})"
              </h1>
              <span className="text-xs leading-4 font-normal">
                {from.airPort}
              </span>
            </div>
            <div>
              <h1 className="text-sm leading-5 font-semibold">
                {to.fullName}"({to.shortName})"
              </h1>
              <span className="text-xs leading-4 font-normal">
                {to.airPort}
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-5 w-fit" id="flight-detail">
          <div className="flex">
            <img
              src={airlines.logo}
              alt="logobambo"
              className="w-7 h-7 rounded-lg border-2"
            />
            <div>
              <h1 className="ml-3 text-sm uppercase">{airlines.name}</h1>
              <div className="ml-3 text-xs">
                <span>{flightCode}</span>
                <span>.</span>
                <span>{flightClass}</span>
              </div>
            </div>
          </div>
          <div className="flex p-4 rounded-xl bg-violet-50 mt-3 ">
            <div className="text-sm mr-20">
              <h2>Baggage {baggage}</h2>
              {inFlight &&
                inFlight.length > 0 &&
                inFlight.map((item, index) => (
                  <h2 key={index}>In-flight {item}</h2>
                ))}
            </div>
            <div className="text-sm">
              <h2>Aircraft {aircraft}</h2>
              <h2>Seat layout {seat}</h2>
              <h2>Seat pitch {seatPitch}</h2>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default Detail;
