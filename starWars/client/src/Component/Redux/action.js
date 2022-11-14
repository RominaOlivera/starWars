import axios from "axios"
export const GET_CHARACTERS = "GET_CHARACTERS"
export const GENDER ="GENDER"
export const GET_NAME ="GET_NAME"
export const GET_DETAIL="GET_DETAIL"

export function getCharacters(){
    return async function(dispatch){
        var json= await axios.get(`${process.env.REACT_APP_STAR}/characters`)
        return dispatch({
            type: GET_CHARACTERS,
            payload: json.data
        })
    }

}
 export function filterGender(payload){
    return{
          type: GENDER,
          payload
    }
 }

 export function getFilterName(name){
    return async function(dispatch){
        var json= await axios.get(`${process.env.REACT_APP_STAR}/characters?name=${name}` )
        return dispatch({
            type: GET_NAME,
            payload: json.data
        })
    }

    
 }
 export function getDetail(id){
    return async function(dispatch){
        var json= await axios (`${process.env.REACT_APP_STAR}${id}`)

        return dispatch({
            type: "GET_DETAIL",
            payload: json.data

    })
}
}
