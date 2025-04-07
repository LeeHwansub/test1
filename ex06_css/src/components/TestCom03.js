import StyleButton from './BtnCom03.js';

function TestCom03() {
  return (
    <>
    <div>
      <h2>TestCom03</h2>
    </div>
    <StyleButton>Click</StyleButton>

    <StyleButton width="100px" background={["255,0,0",0.5]}>로그인</StyleButton>
    </>
  );
}
export default TestCom03;