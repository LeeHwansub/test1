import { useState } from "react";
import QuizComponent from "../Compoernet/QuizComponent";

function QuizContainal() {

const [num,setNum] = useState(0);

const click = () => {
  setNum(num + 1);
  console.log(num);
}
const click2 = () => {
  setNum(num - 1);
  console.log(num);
}

    return (<>
    <QuizComponent click = {click} click2={click2} num={num}/>
    </>
    );
  }export default QuizContainal;