import React from "react";

import { FooterWrapper, LineBefore } from "./styles";
function Footer() {
  return (
    <FooterWrapper className="container flex justify-between mb-10">
      <div className="flex">
        <div className="mr-5">
          <span>
            <i className="las la-phone bg-blue-400 rounded-full"></i>Call us:
            +84 908 02 02 58
          </span>
        </div>
        <div>
          <span>
            <i className="las la-envelope bg-blue-400 rounded-full"></i>Email:
            chucinog@gmail.com
          </span>
        </div>
      </div>
      <div>
        <span>Follow us</span>
        <LineBefore></LineBefore>
        <i className="lab la-facebook-f bg-blue-400 ml-2 rounded-full"></i>
        <i className="lab la-instagram bg-blue-400 ml-2 rounded-full"></i>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
