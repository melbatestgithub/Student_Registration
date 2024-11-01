export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';
export const DELETE_STUDENT_REQUEST = 'DELETE_STUDENT_REQUEST';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';
export const UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE';
export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const fetchStudentsRequest = () => ({
    type: FETCH_STUDENTS_REQUEST,
});

export const fetchStudentsSuccess = (students) => ({
    type: FETCH_STUDENTS_SUCCESS,
    payload: students,
});

export const fetchStudentsFailure = (error) => ({
    type: FETCH_STUDENTS_FAILURE,
    payload: error,
});

export const addStudentRequest = (studentData) => ({
    type: ADD_STUDENT_REQUEST,
    payload: studentData,
});

export const addStudentSuccess = (student) => ({
    type: ADD_STUDENT_SUCCESS,
    payload: student,
});

export const addStudentFailure = (error) => ({
    type: ADD_STUDENT_FAILURE,
    payload: error,
});

export const deleteStudentRequest = (id) => ({
    type: DELETE_STUDENT_REQUEST,
    payload: id,
});

export const deleteStudentSuccess = (id) => ({
    type: DELETE_STUDENT_SUCCESS,
    payload: id,
});

export const deleteStudentFailure = (error) => ({
    type: DELETE_STUDENT_FAILURE,
    payload: error,
});

export const updateStudentRequest = (_id, updatedData) => ({ 
    type: UPDATE_STUDENT_REQUEST,
    payload: { id: _id, updatedData }, 
});

export const updateStudentSuccess = (_id, updatedData) => ({
    type: UPDATE_STUDENT_SUCCESS,
    payload: { id: _id, updatedData }, 
});


export const updateStudentFailure = (error) => ({
    type: UPDATE_STUDENT_FAILURE,
    payload: error,
});
