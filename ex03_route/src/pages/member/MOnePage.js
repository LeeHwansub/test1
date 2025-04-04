import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import MOneCon from "../../containers/member/MOneCon";
import MOneCom from "../../components/member/MOneCom";

function MOnePage() {
const params = useSearchParams();
console.log("MOnePage params", params[0].get("id"));
const[user, setUser] = useState("3번 회원 정보 가져옴")

    return (
    <>
    <MOneCon />
    {/* <MOneCom user={user} /> */}

    </>
    );
  }export default MOnePage;