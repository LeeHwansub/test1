import { createContext, useState } from "react";

const TextContext = createContext();    // 저장소 생성
const TestProvider =({children}) =>{
    const [num, setNum] = useState(0);
    const clickPlus =() =>
        {
            // alert("clickPlus")
            setNum(num+1);
        }
    const clickSub =() =>{
        // alert("clickSub")
        setNum(num-1);

    }
    const value ={clickPlus,clickSub,num}
    return (<>
    <TextContext.Provider value={value}>
        {children}
    </TextContext.Provider>
    </>)
}

export{TextContext, TestProvider}