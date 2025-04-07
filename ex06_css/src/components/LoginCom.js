import { Link } from "react-router-dom";
import styled from "styled-components";
import StyleInput from "./Common/StyleInput";
import StyleForm from "./Common/StyleForm";
import StyleButton from "./Common/SyleButton"

const AuthBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

const WhiteBox = styled.div`
  position: absolute;
  width: 360px;
  min-height: 200px;
  top: 150px;
  left: calc(50% - 180px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  background: white;
  border-radius: 5px;
  .login-area {
    text-align:center;
    font-size : 20px;
    font-weight: bold;
    letter-spacing: 5px;
    border-bottom: 1px dotted olive;
    padding-bottom: 5px;
    width: 50%;
    margin: 0 auto;
    a{color: darkcyan;
    &:hover{color:cyan}
    }
}
`;

function LoginCom() {
  return (
    <>
      <AuthBlock>
        <WhiteBox>
            <div className="login-area"><Link to ="/">탱이냥 이동</Link></div>
            <StyleForm>
            <StyleInput placeholder="input username"/>
            <StyleInput placeholder="input password"/>
            <StyleButton width="100%" background={["178,235,244",0.5]}>로그인</StyleButton>
            </StyleForm>
        </WhiteBox>
        </AuthBlock>
    </>
  );
}
export default LoginCom;