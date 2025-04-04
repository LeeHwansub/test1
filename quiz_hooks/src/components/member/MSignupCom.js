function MSignupCom({input, inputRef, onSubmit, onChange}){
    return(
        <>
        <form onSubmit={onSubmit}>
            <input type="text" ref={e=>inputRef.current[0] = e} value={input.inputId}
            name="inputId" onChange={onChange} placeholder="input id"/><br/>
            <input type="text" ref={e=>inputRef.current[1] = e} value={input.inputPwd}
            name="inputPwd" onChange={onChange} placeholder="input pwd"/><br/>
            <input type="text" ref={e=>inputRef.current[2] = e} value={input.checkPwd}
            name="checkPwd" onChange={onChange} placeholder="check pwd"/><br/>
            <input type="text" ref={e=>inputRef.current[3] = e} value={input.inputName}
            name="inputName" onChange={onChange} placeholder="input name"/><br/>
            <input type="text" ref={e=>inputRef.current[4] = e} value={input.inputAddr}
            name="inputAddr" onChange={onChange} placeholder="input addr"/><br/>
            <button>회원가입</button>
        </form>
        </>
    )
}
export default MSignupCom