import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import {getList} from "../../service/member/member"

function MListCon(){
    const [List, setList] = useState();
    console.log("start")
    useEffect(()=> {
        setList(getList());
    },[])
    return(
        <>
        <MListCom List = {List}/>
        </>
    )
}
export default MListCon;