import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { deleteOne } from "../../service/member/member";

function MDeleteCon(){
    const params = useParams();
    const result = deleteOne(params.id);
    const navigate = useNavigate();
    useEffect(()=>{
        if( result === 1 ){
            alert("삭제 성공");
            navigate("/member/list")
        }
    },[result, navigate])
    return(<>
        MDeleteCon
        </>
    )
}
export default MDeleteCon;