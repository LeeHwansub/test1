import MUpdateCom from "../../components/member/MUpdateCom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOne, updateOne } from "../../service/member/member";


function MUpdateCon(){
    const {id} = useParams();
    const navigate = useNavigate();
    const[input, setInput] =useState({
        inputId: "",
        inputPwd: "",
        inputName: "",
        inputAddr: ""        
    })

    useEffect(() => {
        const member = getOne(id);
        if (member) {
          setInput({
            inputId: member.id,
            inputPwd: member.pwd,
            inputName: member.name,
            inputAddr: member.addr
          });
        }
      }, [id]);

      const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };

      const onSubmit = (e) => {
        e.preventDefault();

        
    
        const result = updateOne(id, {
          id: input.inputId,
          pwd: input.inputPwd,
          name: input.inputName,
          addr: input.inputAddr
        });
    
        if (result === 1) {
          alert("수정 완료!");
          navigate("/member/one?id="+id);
        } else {
          alert("수정 실패!");
        }
    };

    return(<>
    <MUpdateCom
    input={input}
    onChange={onChange}
    onSubmit={onSubmit}
    isModify={true}/>        
    </>
    )
}
export default MUpdateCon;