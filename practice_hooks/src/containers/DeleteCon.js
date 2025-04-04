import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOne } from "../service/member/member";

function DeleteCon() {

    const params = useParams();
    const result = deleteOne(params.id);
    const navigate = useNavigate();
    useEffect(() => {
        if(result === 1) {
            alert("회원 탈퇴가 성공적으로 완료되었습니다.");
            navigate("/")
        }
    }, [result, navigate])

  return (
    <div>
      <h1>DeleteCon</h1>
    </div>
  );
}
export default DeleteCon;