import React from "react";
import { FareInfoCustom } from "./styed";

function FareInfo(props) {
  const {
    airlines,
    from,
    to,
    price,
    discountPrice,
    flightCode,
    flightClass,
    saveAmount,
    include,
    refundable,
  } = props.data;

  const { isShow } = props;
  return (
    <div style={{ display: isShow ? "block" : "none" }}>
      <FareInfoCustom className="grid grid-cols-8">
        <div className="flex flex-col col-span-3 justify-between mr-8">
          <h1 className="text-sm leading-5 font-semibold uppercase">
            Conditions
          </h1>
          <div className="flex mt-4">
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
          <div className="flex my-3">
            <div>
              <h1 className="text-sm leading-5 font-normal">{from.fullName}</h1>
              <span className="text-xs leading-4 font-normal">
                {flightClass}
              </span>
            </div>
            <span className="mx-1">line</span>
            <div>
              <h1 className="text-sm leading-5 font-normal">{to.fullName}</h1>
            </div>
          </div>
          <span className="text-xs leading-4 font-normal">
            {refundable ? "Refundable" : "Non - Refundable"}
          </span>
        </div>
        <div className="col-span-5">
          <h1 className="title text-sm leading-5 font-semibold uppercase">
            price details
          </h1>
          <div className="mt-4">
            <div className="flex justify-between">
              <h2 className="text-xs leading-6 font-normal">
                Adult basic fare
              </h2>
              <span className="pr-2 text-xs leading-6 font-bold">{price}</span>
            </div>
            <div className="flex justify-between">
              <h2 className="text-xs leading-6 font-normal">Tax</h2>
              <span className="pr-2 text-xs leading-6 font-normal">
                {include ? "include" : "no include"}
              </span>
            </div>
            <div className="flex justify-between">
              <h2 className="text-xs leading-6 font-normal">
                Regular total price
              </h2>
              <span className="pr-2 text-xs leading-6 font-normal">
                {price}
              </span>
            </div>
            <div className="flex justify-between border-b-2">
              <h2 className="text-xs leading-6 font-normal text-orange-500">
                save
              </h2>
              <span className="pr-2 text-xs leading-6 text-orange-500 font-bold">
                {saveAmount}
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <h2 className="text-xs leading-6 font-normal">You pay</h2>
            <span className="pr-2 text-xs leading-6 text-orange-500 font-bold">
              {discountPrice}
            </span>
          </div>
        </div>
      </FareInfoCustom>
    </div>
  );
}

export default FareInfo;
