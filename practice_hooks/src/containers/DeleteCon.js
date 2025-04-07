import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteOne } from "../service/member";

function DeleteCon() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const result = deleteOne(id);
    if (result === 1) {
      alert("회원 탈퇴가 성공적으로 완료되었습니다.");
      navigate("/");
    } else {
      alert("회원 탈퇴에 실패했습니다.");
      navigate("/member/one?id=" + id);
    }
  }, [id, navigate]);

  return null; // 아무 것도 렌더링하지 않음
}

export default DeleteCon;
