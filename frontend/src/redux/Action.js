export const DISPLAY_STUDENTS='DISPLAY_STUDENTS';
export const ADD_STUDENT='ADD_STUDENT';
export const DELETE_STUDENT='DELETE_STUDENT';
export const UPDATE_STUDENT='UPDATE_STUDENT';
export const SEARCH_STUDENT='SEARCH_STUDENTS';

export const fetchStudents=(students)=>({
type:DELETE_STUDENT,
payload:students
})

export const addStudent=(student)=>({
    type:ADD_STUDENT,
    payload:student
})

export const updateStudent=(id,updatedData)=>({
   type:UPDATE_STUDENT,
   payload:{id,updatedData}
})

export const deleteStudent=(id)=>({
    type:DELETE_STUDENT,
    payload:id
})