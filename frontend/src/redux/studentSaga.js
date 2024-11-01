import { call, put, takeEvery } from 'redux-saga/effects';
import {
    fetchStudentsSuccess,
    addStudentSuccess,
    addStudentFailure,
    deleteStudentSuccess,
    deleteStudentFailure,
    updateStudentSuccess,
    updateStudentFailure,
    FETCH_STUDENTS_REQUEST,
    ADD_STUDENT_REQUEST,
    DELETE_STUDENT_REQUEST,
    UPDATE_STUDENT_REQUEST,
} from './Action';

function* fetchStudentsSaga() {
    try {
        const response = yield call(fetch, 'https://registrationbackend-3b6f.onrender.com/students/getAllStudent'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const students = yield response.json();
        yield put(fetchStudentsSuccess(students));
        console.log(students)
    } catch (error) {
        console.error("Failed to fetch students", error);
       
    }
}

function* addStudentSaga(action) {
    try {
        const response = yield call(fetch, 'https://registrationbackend-3b6f.onrender.com/students/registerStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.payload),
        });
        const data = yield response.json();
        console.log(data)

        if (response.ok) {
            yield put(addStudentSuccess(data)); 
        } else {
            yield put(addStudentFailure(data.error)); 
        }
    } catch (error) {
        
        yield put(addStudentFailure(error.message)); 
    }
}


function* deleteStudentSaga(action) {
    console.log("Delete Saga Triggered with ID:", action.payload);
    try {
        
        const response = yield call(fetch, `https://registrationbackend-3b6f.onrender.com/students/delete/${action.payload}`, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error('Failed to delete student');
        }
        yield put(deleteStudentSuccess(action.payload));
    } catch (error) {
        console.error("Failed to delete student", error);
        yield put(deleteStudentFailure(error.message)); 
    }
}

function* updateStudentSaga(action) {
    console.log("Received action in saga:", action);
    try {
        const response = yield call(fetch, `https://registrationbackend-3b6f.onrender.com/students/update/${action.payload.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.payload.updatedData),
        });

        if (!response.ok) {
            throw new Error('Failed to update student');
        }

        const updatedStudent = yield response.json();
        yield put(updateStudentSuccess(action.payload.id, updatedStudent)); 
    } catch (error) {
        console.error("Failed to update student", error);
        yield put(updateStudentFailure(error.message)); 
    }
}


export default function* rootSaga() {
    yield takeEvery(FETCH_STUDENTS_REQUEST, fetchStudentsSaga);
    yield takeEvery(ADD_STUDENT_REQUEST, addStudentSaga);
    yield takeEvery(DELETE_STUDENT_REQUEST, deleteStudentSaga);
    yield takeEvery(UPDATE_STUDENT_REQUEST, updateStudentSaga);
}
