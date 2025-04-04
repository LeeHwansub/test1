function UserRef04Com({inputRef, input,onChange, onSubmit, inputId, inputPwd}){
    return(
        <>
        <form onSubmit={onSubmit}>
            {/* <input type ="text" ref={inputId} value={input.username}
            name="username" onChange={onChange} placeholder="username"/><br/>
            <input type ="text" ref={inputPwd} value={input.password}
            name="password" onChange={onChange} placeholder="password"/><br/> */}
            <input type ="text" ref={e=>inputRef.current[0] = e} value={input.username}
            name="username" onChange={onChange} placeholder="username"/><br/>
            <input type ="text" ref={e=>inputRef.current[1] = e} value={input.password}
            name="password" onChange={onChange} placeholder="password"/><br/>
        <button>submit</button>
        </form>

        </>
    )
}
export default UserRef04Com;