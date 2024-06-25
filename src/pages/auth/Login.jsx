import React, { useState } from 'react';
import "../../styles/login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { userLogin } from '../../action/authaction/authaction';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(data, navigate));
  };

  return (
    <div className='wrapper'>
      <div className="login">
        <h2>Login</h2>
      </div>
      <form className='container' onSubmit={handleSubmit}>
        <label htmlFor='email' className="label">Email</label>
        <input 
          type="email" 
          id='email' 
          placeholder="Email" 
          className="input" 
          name='email' 
          value={data.email} 
          onChange={handleChange} 
        />

        <label htmlFor='password' className='label'>Password</label>
        <div className='password_container'>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            id='password' 
            name='password' 
            value={data.password} 
            onChange={handleChange} 
            className='input' 
          />
          <span onClick={passwordVisibility} className='password'>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button className='btn'>Login</button>
        <div className='signup'>
         <h5>Dont have Account  Please  <NavLink to='/signup' style={{color:"red"}}>Sign Up</NavLink></h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
