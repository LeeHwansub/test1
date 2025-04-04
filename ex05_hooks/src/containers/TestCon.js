import { useContext } from "react";
import TestCom from "../components/TestCom";
import { TextContext } from "../store/TextContext";

function TestCon(){
    const context = useContext(TextContext)
    console.log("context : ", context)
    const onPlus =() =>{
        context.clickPlus();
    }
    const onSub =() =>{
        context.clickSub();
    }
    return(
        <>
        <TestCom num={context.num} onPlus={onPlus} onSub={onSub}/>
        </>
        )
}
export default TestCon;