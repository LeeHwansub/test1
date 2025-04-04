function ReducerCom({state, onUp, onDown}){
    
    return(
        <>
        {state.value}<br/>
        <button onClick={onUp}>up</button>&nbsp;
        <button onClick ={onDown}>dowm</button>
        </>
    )
 
}
export default ReducerCom;