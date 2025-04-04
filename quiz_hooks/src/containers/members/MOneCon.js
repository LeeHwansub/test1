import { useNavigate, useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { useEffect, useState } from "react";
import { getOne } from "../../service/member/member";

function MOneCon(){
    const[params] = useSearchParams();
    const [data, setData] = useState({});
    useEffect(()=>{
        const id = params.get("id");
        setData(getOne(id));
    },[params])

    const navigate = useNavigate();
    const oneDelete =(id)=>{
        navigate("/member/delete/"+id);
    }
    const oneUpdate =(id)=>{
        navigate("/member/update/"+id)
    }
    return(
        <>
        <MOneCom data ={data} oneDelete={oneDelete} oneUpdate={oneUpdate}/>
        </>
    )
}
export default MOneCon;