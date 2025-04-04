import { useRef, useState } from "react";
import UserRef03Com from "../../componets/form/UserRef03Com";

const UserRef03Con = () => {
    const [num, setNum] = useState(0);
    const number = useRef(0);
    console.log(" start ")
    const onState = () => { setNum(num + 1); 
        console.log("number :", number.current)
    }
    const onRef = () => { number.current = number.current + 1;}
    return (<>
        <UserRef03Com num={num} number={number} onState={onState} onRef={onRef} />
    </>)
}
export default UserRef03Con;