import { useNavigate } from "react-router-dom";
import MListCon from "../../containers/member/MListCon";
import MListCom from "../../components/member/MListCom2";

function MListPage() {
  const navigate = useNavigate();
  const indexBtn = () => {
    navigate("/");
  }
  const beforeBtn = () => { 
    navigate(-1);
  }

    return (
    <>
      <MListCon/>
      {/* <MListCom indexBtn ={indexBtn} beforeBtn={beforeBtn}/> */}
      </>
    );
  }export default MListPage;