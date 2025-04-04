import { useRef, useState } from "react";
import UserRef04Com from "../../componets/form/UserRef04Com";


const init = { username:"", password:""}
function UserRef04Con(){
    const[input,setInput] = useState(init);
    const inputId =useRef();
    const inputPwd =useRef();
    const inputRef =useRef([]);
    const onChange =(e)=>{
        setInput({...input, [e.target.name]: e.target.value})
    }
    const onSubmit= (e) => {
        e.preventDefault();
        for (let i = 0; i < inputRef.current.length; i++) {
            if(inputRef.current[i].value===""){
                alert(inputRef.current[i].name + " empty")
                inputRef.current[i].focus()
                return
            }
        }
        // if(input.username === ""){
        //     alert("username is empty")
        //     inputId.current.focus()
        // }else if(input.password === ""){
        //     alert("password is empty")
        //     inputPwd.current.focus()
        // }else{
        //     //모든 데이터 입력 후 전송
        // }
    }

    return(
        <>
        <UserRef04Com inputRef={inputRef} input = {input} onChange= {onChange} onSubmit={onSubmit} inputId={inputId} inputPwd={inputPwd}/>
        </>
    )
}
export default UserRef04Con;