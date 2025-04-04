
export const initialState ={
    login: {id:"",pwd: ""},
    register :{id:"", pwd:"",checkPwd:"", name:"", email:""},
    data : [],
    loding : false,
    error : null
}

export const reducer = (state, action) =>{
    switch(action.type){
        case "CHANGE_INPUT":
            return {...state,[action.form] : {...state[action.form],[action.name]: action.value}}
        case "LIST" : return {...state, data: action.data}
        case "LOADING" : return{...state, loading:true, error:null}
        case "FINISHED" : return{...state, loading:false}
        case "ERROR" : return{...state, loding:false, error:action.error}
        default:
            return state;
    }
}