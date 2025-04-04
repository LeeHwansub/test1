function UpdateCom({onChange, onSubmit, input}){
    return(
        <form onSubmit={onSubmit}>
        <label>ID : <input type="text" name="inputId" value={input.inputId} readOnly/></label><br/>
        <label>Password : <input type="text" name="inputPwd" value={input.inputPwd} onChange={onChange}  /></label><br/>
        <label>Name : <input type="text" name="inputName" value={input.inputName} onChange={onChange}  /></label><br/>
        <label>Addr : <input type="text" name="inputAddr" value={input.inputAddr} onChange={onChange}  /></label><br/>
        <button type="submit">수정하기</button>
        </form>
    )
}
export default UpdateCom;