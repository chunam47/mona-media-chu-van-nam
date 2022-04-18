import React from "react";
import { DestinationCardCustom } from "./styled";

function DestinationCard(props) {
  const { direction, airport, province } = props;
  return (
    <DestinationCardCustom className="flex w-64 h-full">
      <div className="info-destination border-2 rounded-xl p-5 py-3 w-full">
        <span className="text-xs text-gray-400 uppercase leading-4">
          {direction}
        </span>
        <h1 className="text-2xl text-blue-800 leading-9">{airport}</h1>
        <h2 className="text-sm font-semibold leading-5">{province}</h2>
      </div>
    </DestinationCardCustom>
  );
}
export default DestinationCard;
