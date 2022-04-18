import React from "react";
import Detail from "./components/Detail";
import FareInfo from "./components/FareInfo";

function FlightDetail(props) {
  const { data, tab } = props;
  return (
    <>
      <Detail data={data} isShow={tab === "detail" ? true : false} />
      <FareInfo data={data} isShow={tab === "fare" ? true : false} />
    </>
  );
}

export default FlightDetail;
