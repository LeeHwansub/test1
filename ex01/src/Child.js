function Child(props){
    console.log("props", props)
    const arr = props.children;
    //[01,02,03]
    const[a,b] = props.children;
    return(<>
    <h3>name : {props.name}</h3>
    <h3>children : {props.children}</h3>
    <h3>{arr}</h3>
    <h3>{a}</h3>
    <h3>{b}</h3>
    Child
    </>)

}
export default Child;