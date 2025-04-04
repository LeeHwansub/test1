import { Link, Outlet } from "react-router-dom";


function HeaderCom({isLoggedIn, user, onLogout}) {
  console.log("user : ",user)
  console.log("isLoggedIn : ",isLoggedIn)
  console.log("onLogout : ",onLogout)

  return (
    <div>
        <header>
            
        <Link to ="/">Home</Link>&nbsp;
        <Link to ="/member/list">회원LIST</Link>&nbsp;
        {isLoggedIn ?
        <> {user}님 환영합니다 <Link to ="/member/logout" onClick={onLogout}>LOGOUT</Link></> :
        <>
        <Link to ="/member/login">LOGIN</Link>&nbsp;
        <Link to ="/member/register">회원가입</Link>&nbsp;
        </>}
        <hr/>
        </header>
        <main>
            <Outlet/>
        </main>
  
    </div>
  );
}
export default HeaderCom;