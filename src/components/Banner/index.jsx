import React from "react";

import { BannerWrapper } from "./styles";

import Img from "../../photo/banner.png";
function Banner() {
  return (
    <BannerWrapper img={Img}>
      <div className="container">
        <h1>
          Hello!
          <br />
          Where are
          <br />
          you <span className="hight-light">flying</span> to ...
        </h1>
      </div>
    </BannerWrapper>
  );
}

export default Banner;
