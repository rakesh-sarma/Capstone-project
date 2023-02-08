import './App.css'
import {Route,Routes} from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="*" element={<div>Error: Not Found the page</div>}/>
      </Routes>
    </div>
  );
}

export default App;