import { useLocation, useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <div>

        {location.pathname}의 경로 페이지는 존재하지 않습니다.<br/>
        <button onClick={()=> navigate("/")}>Home이동</button>
        </div>

    );
}
export default NotFound;