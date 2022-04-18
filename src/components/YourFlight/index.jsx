import React from "react";

function YourFlight() {
  return (
    <div className=" h-fit bg-white border-2 rounded-xl col-span-2 list-left">
      <h1 className="uppercase p-4 border-b-2">Your flights</h1>
      <div className="lg:block flex justify-between ">
        <div className="flex mt-4">
          <div className="m-3">
            <span className="bg-gray-500 text-white rounded-full p-1">01</span>
          </div>
          <div>
            <div className="text-sm leading-5 font-normal">
              Fri, 11 Feb, 2022
            </div>
            <div className="text-sm leading-5 font-semibold">
              Da Nang - Ho Chi Minh
            </div>
          </div>
        </div>
        <div className="flex lg:mt-0 mt-4 lg:mr-0 mr-4">
          <div className="flex flex-col justify-center">
            <img
              src="https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg"
              alt="logobambo"
              className="w-8 h-8 rounded-lg border-2 m-3"
            />
          </div>
          <div>
            <div className="text-sm leading-5 font-semibold uppercase">
              Bamboo Airways
            </div>
            <a className="text-xs leading-4 font-normal" href="#">
              Detail
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between m-3">
        <div>
          <h1 className="text-sm leading-5 font-semibold">21:40</h1>
          <span>DAD</span>
        </div>
        <div className="mx-5 ">
          <h1 className="text-sm leading-5 font-normal">1h 30m</h1>
          <span> line</span>
          <span>Direct</span>
        </div>
        <div>
          <h1 className="text-sm leading-5 font-semibold">23:10</h1>
          <span>DAD</span>
        </div>
      </div>
      <div className="border-b-2 mx-3 ">
        <button
          className="text-blue-600 font-semibold flex justify-center w-full text-xs leading-4 bg-blue-100 rounded-full my-3 px-14 py-3"
          type="submit"
        >
          Change departure flight
        </button>
      </div>
      <div className="flex mt-4">
        <div className="m-3">
          <span className="bg-blue-600 text-white rounded-xl p-1">02</span>
        </div>
        <div>
          <div className="text-sm leading-5 font-normal">Sun, 13 Feb, 2022</div>
          <div className="text-sm leading-5 font-semibold">
            Ho Chi Minh - Da Nang
          </div>
        </div>
      </div>
      <div className="bg-rose-50  rounded-b-xl">
        <div className="mx-4 ">
          <h2 className="text-sm leading-5 font-normal">Subtotal</h2>
          <span className="pr-2 text-xs leading-6 text-orange-500 font-semibold">
            1,326,000 vnd
          </span>
        </div>
      </div>
    </div>
  );
}

export default YourFlight;
