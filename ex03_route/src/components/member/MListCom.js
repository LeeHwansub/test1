import { Link } from "react-router-dom";

function MListCom({list, onDelte}){
    console.log("end")
    return(<>
    {list && list.map((item , index)=>(
        <div key ={index}>
            id :{item.id} <br/>
            name :
            <Link to ={`member/one/${item.id}`}>{item.name}</Link> <br/> 
            age :{item.age} <br/>   
            addr :{item.addr} <br/> 
            <button onClick = { ()=> onDelte(item.id) }>{item.id} : 삭제</button>
            <hr/>
        </div>))
}
</>)
}
export default MListCom;