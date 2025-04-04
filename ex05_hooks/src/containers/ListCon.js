import ListCom from "../components/ListCom";
import{initialState,reducer} from "../moduls/member_red"
import { useReducer } from "react";
import { getList } from "../service/member";
import { useState, useEffect } from 'react';


function ListCon(){
 
    const [state,dispatch] =useReducer(reducer,initialState)
    // const[data, setData] =useState();
    useEffect(()=>{
        //setData(서버 데이터 저장)
        dispatch({type:"LOADING"})
        try{
            setTimeout(()=>{
                const data =getList();
                dispatch({type:"FINISHED"})       
                dispatch({type:"LIST",data})
            },2)
            // throw new Error("Failed to fetch data")
        }catch(e){dispatch({type:"ERROR", error:e.toString()})
        }
       
       
    },[])
    console.log("state : " , state)
    return(
        <>
        <ListCom data={state.data} loding={state.loding} error={state.error}/>
        </>
    )
}
export default ListCon;