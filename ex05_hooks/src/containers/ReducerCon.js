import { useReducer } from "react";
import ReducerCom from "../components/ReducerCom";

const reducer = (state, action) =>{
    console.log("reducer call",action);
switch(action.type){
    case "UP": return {value : state.value +1}
    case "DOWN": return {value : state.value -1}
    default : return state;
}
// return{value:1000}
}

const initalState ={value : 0}

function ReducerCon(){
    const[state, dispath] = useReducer(reducer, initalState);
    console.log("state",state);
    const onUp =() =>{
        dispath({type : "UP"})
    };
    const onDown = () =>{
        dispath({type : "DOWN"})
    };
    return(<div>
        <ReducerCom state={state} onUp={onUp} onDown={onDown}/>
        </div>
    )
}
export default ReducerCon;