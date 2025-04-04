export const CheckBoxComponent= ({hobby,onChangeHobby, submit}) =>{
    return(<>
    <form onSubmit={submit}>
        {hobby && hobby.map((item) =>
        <span key={item.key}>
            <label htmlFor={item.key}>{item.label}</label>
            <input id={item.key} type="checkbox" checked={item.isChecked}/>
            onChange={()=>onChangeHobby(item.key)}
        </span>
    )}
       <button>전송</button>
    </form>
 
        
    </>)
}

function CheckBox02Com({isChecked ,onChecked}){
    return(
        <>
        <form>
            <label>
                확인<input type="checkbox" checked={isChecked} onChange={onChecked}/>
            </label>
        </form>
        </>
    )
}
export default CheckBox02Com;