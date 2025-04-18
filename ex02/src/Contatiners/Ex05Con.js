import { useState } from "react";
import Ex05Com from "../Compoernet/Ex05Com";

function Ex05Con(){
    const[ obj, setObj ]=useState({}); 
    if(Object.keys(obj).length === 0){
        setObj({name:"홍길동", addr :"산골짜기"});
    }
    const onChangeName = () => {
        setObj({name:"이순신", addr : obj.addr});
    }
    const onChangeAddr = () => {
        setObj({...obj, addr:"바다"});
    }   
    return(
 <>
 <Ex05Com 
 obj={obj} 
 onChangeName={onChangeName} 
 onChangeAddr={onChangeAddr}
 />
 </>   
 )
}export default Ex05Con;