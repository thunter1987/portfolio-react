import { useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Signup from '../Signup/Signup';

const Login = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const userDataCopy = { ...userData };
    userDataCopy[name] = value;

    setUserData(userDataCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (<div className='login-page'>
    <form className='login-form' onSubmit={handleSubmit}>
    <label htmlFor='username'>Username:</label>
      <input id='username' type='text' placeholder='Username' onChange={handleChange} />
    <label htmlFor='password'>Password:</label>
      <input id='password' type='password' onChange={handleChange} placeholder='Password' />
      <input type='submit' id='login'/>
    </form>
    <NavLink to={Signup}>Register for an Account?</NavLink>
  </div>
  )
}

export default Login