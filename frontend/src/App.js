import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import RegisterStudents from './pages/RegisterStudents';
import StudentDetail from './pages/StudentDetail';
import HomePage from "./pages/Home"

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterStudents/>}/>
      <Route path='/student-detail' element={<StudentDetail/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
