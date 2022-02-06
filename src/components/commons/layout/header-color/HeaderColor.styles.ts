import styled from "@emotion/styled";
import { IPropsHeader } from "./HeaderColor.types";
import Button from "@mui/material/Button";
import { breakPoints } from "../../../../commons/styles/media";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: ${(props: IPropsHeader) =>
    props.colorChange === true ? "white" : "#1dbd67"};
  color: ${(props: IPropsHeader) =>
    props.colorChangeTxt === true ? "black" : "white"};
  position: sticky;
  transition: all 0.2s ease;
  border-bottom: ${(props: IPropsHeader) =>
    props.bar === true ? "1px solid #f5f5f5" : "none"};
  top: 0px;
  z-index: 2;
`;

export const Wrapper = styled.div`
  width: 84%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
export const Logo = styled.div`
  display: flex;
`;

export const Nav = styled.div``;

export const PageBtn = styled.span`
  font-size: 0.925rem;
  padding-right: 25px;
  font-family: "Montserrat-Medium";
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export const LoginBtns = styled.div``;

export const Login = styled.span`
  font-family: "Montserrat-Medium";

  cursor: pointer;
`;

export const SignUp = styled.span`
  font-family: "Montserrat-Medium";
  cursor: pointer;
  padding-left: 25px;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.span`
  font-family: "myFont";
  font-weight: 600;
  font-size: 0.925rem;
  padding-right: 10px;
`;
export const UserIcon = styled.span`
  padding-bottom: 3px;
`;

export const Btn = styled(Button)({
  color: "white",
  fontSize: "0.925rem",
  fontWeight: "600",
  "&:hover, &.Mui-focusVisible": {
    backgroundColor: "#1dbd67",
    opacity: "0.6",
  },
});

export const Btn02 = styled(Button)({
  color: "black",
  fontSize: "0.925rem",
  fontWeight: "600",
  "&:hover, &.Mui-focusVisible": {
    backgroundColor: "white",
    opacity: "0.6",
  },
});
