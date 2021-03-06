import * as A from "./Login.styles";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IPropsLoginUI } from "./Login.types";

export default function LoginUI(props: IPropsLoginUI) {
  return (
    <>
      <A.Background>
        <A.LeftWrapper></A.LeftWrapper>
        <A.RightWrapper>
          <A.Logo>
            <img src="/images/logo_small.png" onClick={props.onClickHome} />
          </A.Logo>
          <A.Register>
            <A.InputWrapper>
              <A.Title>
                WELCOME BACK TO <br />
                <A.ColorTitle>SOY.</A.ColorTitle>MARKET
              </A.Title>
              <A.InputBox>
                <A.EmailInputStyle
                  id="standard-basic"
                  label="이메일"
                  name="email"
                  variant="standard"
                  defaultValue="soy123@soymarket.shop"
                  onChange={props.onChangeEmail}
                />
              </A.InputBox>
              <A.Error>{props.emailError}</A.Error>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <div>
                  <A.FormBox sx={{ m: 1, width: "40ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      비밀번호
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={props.values.showPassword ? "text" : "password"}
                      name="password"
                      defaultValue="Soy123123!"
                      onChange={props.onChangePassword}
                      endAdornment={
                        <InputAdornment position="end">
                          <A.Icon
                            aria-label="toggle password visibility"
                            onClick={props.handleClickShowPassword}
                            onMouseDown={props.handleMouseDownPassword}
                          >
                            {props.values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </A.Icon>
                        </InputAdornment>
                      }
                    />
                  </A.FormBox>
                </div>
              </Box>
              <A.Error>{props.passwordError}</A.Error>
            </A.InputWrapper>
            <A.RegisterBtn onClick={props.onClickLogin}>로그인</A.RegisterBtn>
            <A.SignUpBtn onClick={props.onClickRegister}>
              아직 소이마켓 회원이 아니세요?
              <A.SignUpText>회원가입</A.SignUpText>
            </A.SignUpBtn>
          </A.Register>
        </A.RightWrapper>
      </A.Background>
    </>
  );
}
