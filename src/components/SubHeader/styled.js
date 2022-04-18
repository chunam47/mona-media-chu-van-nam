import styled from "styled-components";

export const SubHeaderCustom = styled.div`
  @media (max-width: 1023px) {
    .flight-info {
      padding: 0px 35px 0 35px;
    }
  }
  @media (max-width: 767px) {
    display: block;

    .flight-info {
      justify-content: unset;
      padding: 10px 0 10px 0;
    }
    .btn {
      width: 155px;
    }
  }
`;
export const ArrowSub = styled.div`
  dipslay: flex;
`;
export const ArrowBag = styled.div`
  @media (max-width: 1279px) {
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (max-width: 1023px) {
    margin-left: 0;
    margin-right: -10px;
    width: 100%;
  }
  @media (max-width: 767px) {
    margin-left: 0;
    margin-right: 0;
    width: auto;
  }
`;
