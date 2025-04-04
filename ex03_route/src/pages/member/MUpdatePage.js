import { useState } from "react";
import { useParams } from "react-router-dom";
import MUpdateCon from "../../containers/member/MUpdateCon";
import MUpdateCom from "../../components/member/MUpdateCom";

function MUpdatePage() {
    const params = useParams();
    console.log("MUpdatePage params : ", params);
    /*
      page -> container -> service ( DB 연동 )
                        -> components
    */
    
    const[user, setUser] = useState("1번회원정보 가져옴")
      
  return (
    <>
    <MUpdateCon />
    {/* <MUpdateCom user ={user}/> */}
    </>
    );
  }export default MUpdatePage;