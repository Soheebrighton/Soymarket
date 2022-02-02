import styled from "@emotion/styled";
import { IPropsStatus, IPropsDisplay } from "./MypagePoint.types";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px 0px 30px 0px;
  width: 1200px;
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  padding-left: 20px;
`;

export const PointCurrentWrapper = styled.div``;

export const Pages = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
`;

export const PickedBtn = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 100%;
`;

export const BoughtBtn = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 100%;
`;

export const MyPointWrapper = styled.div`
  width: 100%;
`;

export const MyPointDetail = styled.div`
  text-align: center;
  border: 1px solid #f5f5f5;
  border-radius: 7px;
  font-size: 20px;
  padding: 20px;
`;

export const MyPointCurrent = styled.div`
  font-size: 50px;
  color: #1dbc67;
`;

export const PointQueryWrapper = styled.div`
  width: 100%;
`;

export const TransTitle = styled.h2`
  padding-top: 30px;
`;

export const TransDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #6f6f6f;
  padding-bottom: 10px;
`;

export const DisplayBtn = styled.div`
  cursor: pointer;
  color: ${(props: IPropsDisplay) => props.isAllTrans && "black"};
  text-decoration: ${(props) =>
    props.isAllTrans ? "solid underline #000 2px " : "none"};
`;

export const DisplayOrdersBtn = styled.div`
  cursor: pointer;
  color: ${(props: IPropsDisplay) => props.isOrders && "black"};
  text-decoration: ${(props) =>
    props.isOrders ? "solid underline #000 2px " : "none"};
`;

export const DisplayTopUpBtn = styled.div`
  cursor: pointer;
  color: ${(props: IPropsDisplay) => props.isTopUp && "black"};
  text-decoration: ${(props) =>
    props.isTopUp ? "solid underline #000 2px " : "none"};
`;

export const DisplaySellingBtn = styled.div`
  cursor: pointer;
  color: ${(props: IPropsDisplay) => props.isSelling && "black"};
  text-decoration: ${(props) =>
    props.isSelling ? "solid underline #000 2px " : "none"};
`;

export const Bar = styled.div`
  width: 1px;
  height: 10px;
  background-color: #6f6f6f;
  margin: 0px 5px 0px 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid #f2f2f2;
  align-items: center;
  width: 100%;
  text-align: center;
  :hover {
    background-color: #fafafa;
  }
`;

export const NoTrans = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid #f2f2f2;
  color: #333333;
`;

export const RowHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 0px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const RowHeaderTxt = styled.div`
  color: #2e2e2e;
  font-weight: 700;
`;

export const Amount = styled.div`
  width: 20%;
`;

export const Balance = styled.div`
  width: 30%;
  justify-content: flex-end;

  font-weight: 400;
`;

export const Status = styled.div`
  width: 30%;
  color: ${(props: IPropsStatus) =>
    props.status === "구매" ? "#FFD600" : "#1dbc67"};
`;

export const CreatedAt = styled.div`
  width: 20%;
  font-size: 13px;
  color: gray;

  font-family: "Montserrat";
`;
