import { useState } from "react";
import Quiz03StoreCom from "../Compoernet/Quiz03StoreCom";

function Quiz03storeCon(){
    const[store, setStore] = useState({msg:"", inData:0, outData:0});   
  
    if(store.msg === ""){
        setStore({msg:"오픈 전 입니다", inData:0, outData:0});
    }
    
    const onClick = () => setStore({...store,msg:"어서오세요", inData : store.inData + 1});
    const onClick2 = () => {
    if(store.outData - store.inData === 0){
        alert("나갈 손님이 없습니다!!!");
    }else{    
         setStore({...store,msg:"안녕히가세요", outData : store.outData + 1});
    }
}

    return(
        <>
        <Quiz03StoreCom store={store} onClick={onClick} onClick2={onClick2}/>
        </>
    );
}export default Quiz03storeCon;