function Quiz03StoreCom({store, onClick, onClick2}){
    return (
        <div>
            msg : {store.msg} <br/>
            in number : {store.inData}<br/>
            out number : {store.outData}<br/>
            in-out = {store.inData - store.outData}<br/>

            <button onClick={onClick} >In</button>
            <button onClick={onClick2}>Out</button>
        </div>
    );
}export default Quiz03StoreCom;