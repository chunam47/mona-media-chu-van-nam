import styled from "styled-components";

export const SelectCustom = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  outline: none;
`;
export const ArrowGroup = styled.div`
  dipslay: flex;
`;
export const DestinationCardCustom = styled.div`
  @media (max-width: 1279px) {
    width: 13rem !important;
  }
  @media (max-width: 1024px) {
    width: 8rem !important;
  }
  @media (max-width: 639px) {
    width: 5rem !important;
    .info-destination {
      padding: 10px !important;
    }
  }
  @media (max-width: 568px) {
    width: 15rem !important;

    .info-destination {
      padding: 1.25rem !important;
  }
  @media (max-width: 530px) {
    width: 12rem !important;

    .info-destination {
      padding: 1rem !important;
  }
  @media (max-width: 480px) {
    width: 7rem !important;

    .info-destination {
      padding: 1.25rem !important;
    }



`;
export const CalendarGroup = styled.div`
  margin-right: 64px;

  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 568px) {
    margin-top: 5px !important;
  }
  @media (max-width: 1279px) {
    margin-right: 50px !important;
  }
  @media (max-width: 767px) {
    margin-right: 25px !important;
  }
`;

export const CardSearch = styled.div`
@media (max-width: 568px) {
  {
   display: block !important;
   
   .card {
      padding-bottom: 10px !important;
      justify-content: center;
   }
 }
`;
export const Filter = styled.div`
@media (max-width: 568px) {
  {
   display: block !important;
 }
`;
