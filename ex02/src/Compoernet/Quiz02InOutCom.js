function Quiz02InOutCom( {msg,inClick, outClick} ) {
    return (<>
        {msg === "" ? "값없음" : msg }<br />
        <button onClick={inClick}>in</button>
        <button onClick={outClick}>out</button>
    </>)
}
export default Quiz02InOutCom;