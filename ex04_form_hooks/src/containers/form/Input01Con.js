import Input01Com from "../../componets/form/Input01Com";
import{useState} from "react";

function Input01Con(){

    const[input, setInput] = useState({username: '', password:''})

    const onChange = (e) =>{

        console.log(e.target)
        console.log(e.target.value)
        setInput({...input,[e.target.name] : e.target.value})
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log("submit : ", input)
    }
    return(
        <>
        <Input01Com onChange={onChange} onSubmit={onSubmit} input={input}/>
        </>
    )
}
export default Input01Con;