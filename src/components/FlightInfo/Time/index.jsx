import React from "react";

function Time(props) {
  const { time, provice } = props;
  return (
    <div>
      <div className="mr-9 text-center">
        <h1 className="text-sm leading-5 font-bold">{time}</h1>
        <span className="text-xs leading-4 font-semibold bg-gray-300 px-2 py-1 rounded-full uppercase">
          {provice}
        </span>
      </div>
    </div>
  );
}

export default Time;
