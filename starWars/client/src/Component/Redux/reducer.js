import { GENDER, GET_CHARACTERS, GET_NAME, GET_DETAIL } from "./action";



const initialState={
  characters : [],
  allcharacters : [],
  detail: []

}



function rootReducer(state=initialState, action){
    switch(action.type){
    case GET_CHARACTERS:
        return {
            ...state,
            characters: action.payload,
            allcharacters: action.payload
        }

     case GENDER:

     const allGender = state.allcharacters
     const gender = action.payload ==="All"? allGender : allGender.filter(e=> e.gender === action.payload)
        return{
            ...state,
            characters:gender

        }
    case GET_NAME:
        return{
            ...state,
            characters:action.payload
        }  
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            }



     default:
          return state;

    }

 
                         
                 
}

    
                
                    



export default rootReducer;