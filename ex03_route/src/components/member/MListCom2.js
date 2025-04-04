import { Link } from "react-router-dom";

function MListCom2({indexBtn, beforeBtn}) { 
   console.log(`end`)
    return (
 <>
<div>1. 회원목록</div>
<div>2. 회원목록</div>
<div>3. 회원목록</div>
<Link to="/member/one?id=3">3번 회원 상세</Link><br/>
<Link to="/member/update/1">1번 회원 수정</Link><br/>

<button onClick={indexBtn}>Index</button> &nbsp;
<button onClick={beforeBtn}>beforeBtn</button><br/>

 </>
    )
}export default MListCom2;