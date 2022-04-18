import styled from "styled-components";

import { Brand } from "../Color";

export const BannerWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  padding: 227px 0 311px 0;

  h1 {
    font-size: 72px;
    line-height: 105px;

    .hight-light {
      color: ${Brand};
    }
  }
  @media (max-width: 568px) {
    h1 {
     font-size: 40px !important;
     line-height: 55px !important ;
   }
`;
