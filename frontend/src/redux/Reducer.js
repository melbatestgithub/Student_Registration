import { DISPLAY_STUDENTS,DELETE_STUDENT,UPDATE_STUDENT,ADD_STUDENT,SEARCH_STUDENT } from "./Action";

const initialState={
    students:[]
}

const studentReducer=(state=initialState,action)=>{
    switch(action.type){
        case DISPLAY_STUDENTS:
            return {...state,students:action.payload}
            case ADD_STUDENT:
                return {...state,students:[...state.students,action.payload]}
            case DELETE_STUDENT:
            return {
                ...state,
                students:state.students.filter((st)=>st.id !==action.payload)
            }
            case UPDATE_STUDENT:
                return {...state,students}
                default:
                    return state;
    }

}