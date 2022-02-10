import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Background = styled.div`
  display: block;
`;

export const Img = styled.img`
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TextDiv = styled.div`
  color: white;
  position: absolute;
  text-align: center;
  padding-bottom: 120px;
  width: 100%;
  z-index: 1;
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  text-shadow: 0 2px 10px #108245;
  @media ${breakPoints.tablet} {
    font-size: 1.8rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.4rem;
  }
`;
export const SubText = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 1.4rem;
  @media ${breakPoints.tablet} {
    font-size: 1.2rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  background-color: #2a2a2a;
  /* background: rgb(34, 195, 147);
  background: linear-gradient(
    119deg,
    rgba(34, 195, 147, 1) 0%,
    rgba(207, 227, 101, 1) 100%
  ); */
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  box-shadow: 0 10px 20px 0 #108245;
  padding: 10px 35px 10px 35px;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    background-color: white;
    background: rgba(255, 255, 255, 0.7);
    color: black;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;
