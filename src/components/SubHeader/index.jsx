import React from "react";
import ArrowLeft from "../icons/arrow-left.svg";
import ArrowRight from "../icons/arrow-right.svg";
import { ArrowBag, ArrowSub, SubHeaderCustom } from "./styled";
function SubHeader() {
  return (
    <SubHeaderCustom className="flex justify-between bg-white  p-5 mb-4">
      <div className="flex">
        <div className="">
          <h1 className="text-base text-blue-800">Da Nang(DAD)</h1>
          <h1 className="text-xs text-black">Fri, 22 Mar, 2022</h1>
        </div>
        <ArrowBag className="flex items-center opacity-40 mx-14">
          <ArrowSub className="mx-5">
            <img src={ArrowLeft} alt="" />
            <img src={ArrowRight} alt="" />
          </ArrowSub>
        </ArrowBag>
        <div className="">
          <h1 className="text-base text-blue-800">Ho Chi Minh(SG)</h1>
          <h1 className="text-xs text-black">Fri, 22 Mar, 2022</h1>
        </div>
      </div>
      <div className="flight-info flex justify-around items-center">
        <h3 className="mr-8">Round-trip</h3>
        <h3 className="mr-8">02 Adult, 01 children</h3>
        <h3>Business Class</h3>
      </div>
      <div className="btn flex items-center px-4 py-2 bg-orange-500 rounded-xl text-white text-sm leading-5">
        <button type="submit">
          Change Flights <i class="las la-search mr-2"></i>
        </button>
      </div>
    </SubHeaderCustom>
  );
}

export default SubHeader;
