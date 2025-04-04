function MOneCom( {data, oneDelete, oneUpdate} ){
    return(
        <div>
            <ul>
        <li>id : {data.id}</li>
        <li>pwd : {data.pwd}</li>
        <li>name : {data.name}</li>
        <li>addr : {data.addr}</li>
        <li>
            <button onClick={()=>oneDelete(data.id)}>삭제</button>&nbsp;
            <button onClick={()=>oneUpdate(data.id)}>수정</button>
        </li>
        </ul>
        </div>
    )
}
export default MOneCom;