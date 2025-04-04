import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getList } from "../../pages/service/member/member";
import { useNavigate } from "react-router-dom";

function MListCon() {
    const [list, setList] = useState();
    // setList(getList());

    console.log(`start`)
    useEffect(() => {
        setList(getList());
    },[])
    const navigate = useNavigate();

    const onDelte =(id) => {
        // alert(id + ": 삭제")
        navigate("/member/delete/" + id)
    }

    return (
        <div>
        <MListCom list = {list} onDelte={onDelte}/>
        </div>

    );
  }
  export default MListCon;