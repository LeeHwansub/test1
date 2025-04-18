import { useState } from "react";
import CheckBox02Com, {CheckBoxComponent} from "../../componets/form/ChckBox02Com";

const init = [
    {key:1, label:"게임", isChecked:false},
    {key:2, label:"영화", isChecked:false},
    {key:3, label:"멍", isChecked:false}
]

function CheckBox02Con(){
    const[hobby, setHobby] = useState(init);
    const [isChecked, setIsChecked] = useState(false);
    const onChecked = ()=>{
        setIsChecked(!isChecked);
    }
    const onChangeHobby = (key) => {
        const updateHobby = hobby.map(check =>
            check.key === key ? {...check, isChecked: !check.isChecked} : check
        );
        setHobby(updateHobby);
    };
    
    const submit =(e) =>{
        e.preventDefault();
        console.log("submit : ",hobby)
    
}
    return(
        <>
        <CheckBoxComponent onChangeHobby={onChangeHobby} hobby={hobby} submit={submit}/><hr/>
        <CheckBox02Com isChecked={isChecked} onChecked={onChecked}/>
        </>
    )
}

export default CheckBox02Con;