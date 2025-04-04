import { useNavigate, useParams } from "react-router-dom";
import { deleteList } from "../../pages/service/member/member";
import { useEffect } from "react";

function MDeleteCon() {
  const params = useParams();
  console.log("params",params);
  deleteList(params.id); // id를 삭제하는 함수

  const navegate = useNavigate();
  useEffect(()=>{
  navegate("/member/list")
});


  return null;
}
export default MDeleteCon;