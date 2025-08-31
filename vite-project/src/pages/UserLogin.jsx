import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../Context/userContext';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userData, setUserData } = useState({});

  const { user, setUser}  = React.useContext(UserDataContext);

  const navigate = useNavigate();



  const submitHandler =async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 200){
        const data = response.data;
        setUser(data.user)
        localStorage.setItem('token',data.token);
        navigate('/home');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
      <div>
        <img
          src="https://imgs.search.brave.com/2-ETdqgg6kcI7QUMz2PjVNGAO2G5jXgkh17yvlZreFQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzEvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n"
          alt="Uber Logo"
          className="h-20 mb-10 w-16"
        />
        <form onSubmit={submitHandler} className='flex flex-col'>
          <label htmlFor="email" className='text-lg font-medium mb-2'>
            What's your email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="email"
            placeholder='your email'
          />

          <label htmlFor="password" className='text-lg font-medium mb-2'>
            Enter Password
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="password"
            placeholder='your password'
          />

          <button
            className='bg-[#111] text-white mb-7 rounded px-4 py-2 border w-full text-lg'
            type='submit'
          >
            Login
          </button>

          <p className='mb-2'>New here?</p>
          <Link to="/signup" className="text-blue-600 mb-7">
            Create new account
          </Link>
        </form>
      </div>

      <div>
        <Link
          to='/CaptainLogin'
          className='flex items-center justify-center bg-[#111] text-white mb-7 rounded px-4 py-2 border w-full text-lg'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;