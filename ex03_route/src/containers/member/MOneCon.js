import { useEffect, useState } from "react";
import MOneCom from "../../components/member/MOneCom";
import { useParams } from "react-router-dom";
import { getOne } from "../../pages/service/member/member";

function MOneCon() {
    const [user, setUser] = useState();
    const params = useParams();
    useEffect(()=>{
        setUser(getOne(params.id));

    },[params.id]);
    return (
        <MOneCom user = {user}/>
    );
  }
  export default MOneCon;