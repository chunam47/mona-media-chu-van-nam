import React from "react";

import Calendar from "../icons/calendar.svg";
import { CalendarGroup } from "./styled";
function CalendarCard(props) {
  const { move, time } = props;
  return (
    <CalendarGroup className="mr-16">
      <span className="text-xs text-gray-400 uppercase leading-4">{move}</span>
      <div className="flex">
        <h1 className="text-2xl text-blue-800 leading-9 pr-3">{time}</h1>
        <img className="pt-1" src={Calendar} alt="" />
      </div>
      <a href="#" className="text-xs text-gray-400 leading-5 pr-5">
        Prev
      </a>
      <a href="#" className="text-xs text-gray-400 leading-5">
        Next
      </a>
    </CalendarGroup>
  );
}
export default CalendarCard;
