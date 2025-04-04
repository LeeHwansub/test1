import { useRef, useState } from "react";
import MSignupCom from "../../components/member/MSignupCom";
import { useNavigate } from "react-router-dom";
import { insertOne } from "../../service/member/member";

const init ={inputId:"", inputPwd:"",checkPwd:"",inputName:"",inputAddr:""}
function MSignupCon(){
    const [input,setInput] =useState(init)
    const inputRef = useRef([]);
    const navigate = useNavigate();
    const onChange= (e)=>{
        setInput({...input, [e.target.name]:e.target.value} )
    }
    const onSubmit= (e) =>{
        e.preventDefault();

        for(let i=0; i< inputRef.current.length; i++){
            if(inputRef.current[i].value===""){
                alert(inputRef.current[i].name + "은 필수 항목입니다.")
                inputRef.current[i].focus()
                return
            }
        }

        if(input.inputPwd !== input.checkPwd){
            alert("비밀번호가 일치하지 않습니다.");
            inputRef.current[1].focus();
            setInput({...input, inputPwd:"", checkPwd:""});
        }else{
            insertOne({
                id: input.inputId,
                pwd: input.checkPwd,
                name: input.inputName,
                addr: input.inputAddr
            })
            alert("회원가입 완료되었습니다!")
            navigate("/member/list")
        }
    }
    return(
        <>
        <MSignupCom input = {input} inputRef={inputRef} onChange={onChange} onSubmit={onSubmit}/>
        </>
    )
}
export default MSignupCon