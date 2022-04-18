import React from "react";

import { HeaderWrapper } from "./styles";
import VN from "../icons/vietnam.svg";
import US from "../icons/united-states.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const { backgroundColor } = props;
  return (
    <HeaderWrapper backgroundColor={backgroundColor}>
      <div className="flex container mx-auto text-center justify-between">
        <div className="flex items-center text-lg">
          <Link to="/">Baycungban</Link>
          <a href="#" className="p-2">
            <img src={VN} alt="VN" className="w-5 h-5" />
          </a>
          <a href="#" className="">
            <img src={US} alt="USA" className="w-5 h-5" />
          </a>
        </div>
        <nav className="md:flex hidden items-center leading-5">
          <a href="#"> Promotion</a>
          <a href="#"> Flight Schedule</a>
          <a href="#"> About us</a>
          <a href="#"> Payment Guide</a>
        </nav>
        <div className="md:flex hidden rounded-xl booking-now">
          <a href="#" className="px-4 py-2">
            Booking now
          </a>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
