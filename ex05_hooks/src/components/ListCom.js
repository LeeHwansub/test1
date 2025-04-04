import { useContext } from "react";
import { TextContext } from "../store/TextContext";

function ListCom({data, loding, error}){
    const {num} = useContext(TextContext)
    return(<>
    <h3>num : {num}</h3>
        { loding ?<h3>Loading...</h3>:
        error ? <h3>{error}</h3>:
        data && data.map(d=>
            <div key={d.id}>
                <span>{d.id}</span><br/>
                <span>{d.name}</span><br/>
                <span>{d.addr}</span><br/>
            </div>
        )}
        
        </>
    );
}
export default ListCom;