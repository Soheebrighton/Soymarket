import styled from "@emotion/styled";

interface IPropsGreenButton {
  text?: string;
  size?: string;
}

const GreenBtn = styled.button`
  color: ${(props: IPropsGreenButton) => (props.size === "m" ? "red" : "blue")};
  /* background-color: #1dbc67; */
  color: white;
  font-weight: 600;
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #1aad5f;
  }
`;

export default function GreenButton(props: IPropsGreenButton) {
  return <GreenBtn>{props.text}</GreenBtn>;
}
