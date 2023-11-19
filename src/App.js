import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
   <main>
      <NavBar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/login' Component={Login} />
        </Routes>
      </main>
  );
}

export default App;
