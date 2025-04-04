export const initialState ={
    login : {id:"",pwd: ""},
    register :{id:"", pwd:"",name:"", email:""},
    data : null,
    loading : false,
    error : null
}


export const reducer = (state,action) =>{
    switch(action.type){
        case "CHANGE_INPUT":
            console.log("state : ",state)
            console.log("action : ",action)
            return {...state,[action.form] : {...state[action.form],[action.name]: action.value}}
            case "LIST" : return {...state, data: action.data}
            case "LOADING" : return{...state, loading:false, error:null}
            case "ERROR" : return{...state, loading:false, error:action.error}
            default:
                return state;
    }
    
}
