import { Link, Outlet } from "react-router-dom";
function HeaderCom(){
    return(
    <div>
        <header>
        <Link to ="/">Home</Link>&nbsp;
        <Link to ="/member/list">Member</Link>&nbsp;
        <Link to ="/member/signup">회원가입</Link>&nbsp;
        </header>
        <main>
            <Outlet/>
        </main>
    </div>

    )
}
export default HeaderCom;