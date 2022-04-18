import React from "react";

import DestinationCard from "./DestinationCard";
import { SelectCustom, ArrowGroup, CardSearch, Filter } from "./styled";
import TriangleDown from "../icons/triangle-down.svg";
import ArrowLeft from "../icons/arrow-left.svg";
import ArrowRight from "../icons/arrow-right.svg";
import CalendarCard from "./CalendarCard";
import ButtonSerach from "./ButtonSearch";

function SearchFlights() {
  return (
    <div>
      <div className="relative container bottom-44 pb-12 pl-7 pr-7 pt-7 bg-white rounded-xl">
        <form>
          <Filter className="bg-while flex mb-5 text-sm">
            <div className="pr-5 flex items-center">
              <input
                id="type-1"
                type="radio"
                value="ticket-type-1"
                name="ticket-type"
              />
              <label className="pl-1" for="type-1">
                One way / Round-trip
              </label>
            </div>
            <div className="pr-12 flex items-center">
              <input
                id="type-2"
                type="radio"
                value="ticket-type-2"
                name="ticket-type"
              />
              <label className="pl-1" for="type-2">
                Multi-city
              </label>
            </div>
            <div className="flex pr-12 items-center">
              <SelectCustom name="quantity">
                <option value="1">02 Adult, 01 children</option>
                <option value="2">01 Adult, 02 children</option>
                <option value="3">03 Adult, 01 children</option>
                <option value="4">04 Adult, 02 children</option>
              </SelectCustom>
              <img className="ml-1" src={TriangleDown} alt="" />
            </div>
            <div className="flex items-center">
              <SelectCustom name="class">
                <option value="1">Business Class</option>
                <option value="2">economi Class</option>
                <option value="3">first Class</option>
              </SelectCustom>
              <img className="ml-1" src={TriangleDown} alt="" />
            </div>
          </Filter>
          <CardSearch className="grid grid-cols-2 gap-5 justify-around card-search">
            <div className="flex items-center card">
              <DestinationCard
                direction="from"
                airport="Da Nang"
                province="Quang Nam, Viet Nam"
              />
              <div>
                <ArrowGroup className="mx-5">
                  <img src={ArrowLeft} alt="" />
                  <img src={ArrowRight} alt="" />
                </ArrowGroup>
              </div>
              <DestinationCard
                direction="to"
                airport="Ho Chi Minh"
                province="Viet Nam"
              />
            </div>
            <div className="flex justify-around border-2 rounded-xl p-5 py-3">
              <CalendarCard
                move="Departure"
                time="Fri, 22 Mar, 2022"
              ></CalendarCard>
              <CalendarCard
                move="Return"
                time="Fri, 22 Mar, 2022"
              ></CalendarCard>
            </div>
          </CardSearch>
        </form>
      </div>
      <ButtonSerach />
    </div>
  );
}

export default SearchFlights;
