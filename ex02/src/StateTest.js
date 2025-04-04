// StateTest01.js
/* 
    components : 최종적으로 화면을 구리는 용도
    contatiners: 함수, 연산 등 모든 값들을 components 전달 후 홤녀 표현
    Ex01Com.js, Ex01Con.js
*/

import React, { useState } from 'react';

function StateTest01() {
  let num = 100; 
  const [number, setNumber] = useState(0); 

  console.log("Start : ", num);

  const click = () => {
    num = num + 1; 
    setNumber(number + 1);
    console.log("Click : ", num);
  };

  return (
    <>
      number : {number}
      <br />
      <button onClick={click}>클릭</button>
    </>
  );
}

export default StateTest01;
