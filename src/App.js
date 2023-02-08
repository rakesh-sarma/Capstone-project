import './App.css'
import {Route,Routes} from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;