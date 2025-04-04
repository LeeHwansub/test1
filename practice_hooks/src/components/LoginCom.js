function LoginCom({onSubmit,loading,username, password, 
    onChange, idRef, pwdRef}){
    return(
        <>
        {loading ? <h3>로그인 처리중...</h3>:
        <form onSubmit={onSubmit}>
        <input type="text" name="id" value={username} onChange={onChange}
        placeholder="아이디" ref={idRef}/><br/>
        <input type="text" name="pwd" value={password} onChange={onChange}
        placeholder="비밀번호" ref={pwdRef}/><br/>
        <button>로그인</button>
        </form>
        }
        </>
    )
}
export default LoginCom;