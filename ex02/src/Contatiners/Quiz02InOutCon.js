import { useState } from "react";
import Quiz02InOutCom from "../Compoernet/Quiz02InOutCom";

function Quiz02InOutCon( ) {
    const [msg, setMsg ] = useState("");
    const inClick = () => {
        setMsg("어서오세요")
    }
    const outClick = () => {
        setMsg("안녕히가세요")
    }
    return (<><Quiz02InOutCom msg={msg} 
                inClick={inClick} outClick={outClick}/>
    </>)
}
export default Quiz02InOutCon;