import styled from "styled-components";

import { Brand } from "../Color";

export const HeaderWrapper = styled.header`
  background-color: ${(props) =>
    props.backgroundColor ? Brand : "transparent"};
  position: ${(props) => (props.backgroundColor ? "" : "absolute")};
  width: 100%;
  top: 0;
  left: 0;
  padding: ${(props) => (props.backgroundColor ? "19px 0" : "38px 0")};

  nav {
    font-size: 14px;
    line-height: 21px;
    a {
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
  color: ${(props) => (props.backgroundColor ? "#FFFFFF" : "#000000")};

  .booking-now {
    color: ${(props) => (props.backgroundColor ? "#4D46FA" : "#FFFFFF")};
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    background-color: ${(props) =>
      props.backgroundColor ? "#FFFFFF" : "#4D46FA"};
  }
`;
