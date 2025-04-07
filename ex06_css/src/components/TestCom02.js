import styled from 'styled-components';

const colorList = [ "red", "skyblue"]


const StyledDiv = styled.div`
  color: blue; font-size: 30px;
`;

const StyleH1 = styled.h1`
  background-color: ${colorList[0]};
  color: ${colorList[1]};
  `;


function TestCom02() {
    return (
      <>
      <StyledDiv>
        <StyleH1>TestCom02</StyleH1>
        <p>This is TestCom02 component.</p>
      </StyledDiv>
      </>
    );
  }
  export default TestCom02;