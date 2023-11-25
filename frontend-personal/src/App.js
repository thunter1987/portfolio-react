import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Signup:Login/Login/Login';
import Signup from './components/Signup:Login/Signup/Signup';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' Component={ Home } />
        <Route path='/login' Component={ Login } />
        <Route path='/signup' Component={ Signup } />
      </Routes>
    </div>
  );
}

export default App;
