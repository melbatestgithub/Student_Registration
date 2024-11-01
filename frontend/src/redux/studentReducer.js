    import {
        FETCH_STUDENTS_SUCCESS,
        FETCH_STUDENTS_FAILURE,
        ADD_STUDENT_SUCCESS,
        ADD_STUDENT_FAILURE,
        DELETE_STUDENT_SUCCESS,
        DELETE_STUDENT_FAILURE,
        UPDATE_STUDENT_SUCCESS,
        UPDATE_STUDENT_FAILURE,
    } from './Action';
    const initialState = {
        data: [],
        loading: false,
        error: null,
    };

    const studentsReducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCH_STUDENTS_SUCCESS:
                return { ...state, loading: false, data: action.payload };
            case FETCH_STUDENTS_FAILURE:
                return { ...state, loading: false, error: action.payload };
            case ADD_STUDENT_SUCCESS:
                return { ...state, data: [...state.data, action.payload] };
            case ADD_STUDENT_FAILURE:
                return { ...state, error: action.payload };
            case DELETE_STUDENT_SUCCESS:
                return { ...state, data: state.data.filter(student => student.id !== action.payload) };
            case DELETE_STUDENT_FAILURE:
                return { ...state, error: action.payload };
                case UPDATE_STUDENT_SUCCESS:
                    return {
                        ...state,
                        data: state.data.map(student =>
                            student._id === action.payload.id ? { ...student, ...action.payload.updatedData } : student
                        ),
                    };
                
            case UPDATE_STUDENT_FAILURE:
                return { ...state, error: action.payload };

            default:
                return state;
        }
    };

    export default studentsReducer;
