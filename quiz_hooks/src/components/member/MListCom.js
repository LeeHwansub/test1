import { Link } from "react-router-dom";

function MListCom({List}){
    return(
        <>
        <table border={1}>
            <thead>
                <tr><th>아이디</th><th>이름</th></tr>
            </thead>
            <tbody>
                {List && List.map((item, index)=>(
                <tr key ={index}>
                <td>{item.id}</td> 
                <td> 
                    <Link to ={"/member/one?id="+item.id}>
                        {item.name}
                    </Link>
                </td>
                </tr>
))}
</tbody>

        </table>
        </>
    )
}
export default MListCom;