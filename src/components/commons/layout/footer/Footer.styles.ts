import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Footer = styled.div`
  background-color: #f5f5f5;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Content = styled.div`
  color: #5b5b5b;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 84%;
  font-size: 0.75rem;
`;
