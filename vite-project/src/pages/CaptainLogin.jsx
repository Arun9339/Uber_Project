import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email,
      password,
    });
    console.log('Captain login data:', captainData);
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
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="email"
            placeholder='Your email'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="password"
            placeholder='Your password'
          />

          <button
            className='bg-[#111] text-white mb-7 rounded px-4 py-2 border w-full text-lg'
            type='submit'
          >
            Login
          </button>

          <p className='mb-2'>New here?</p>
          <Link to='/CaptainSignup' className="text-blue-600 mb-7">
            Create new account
          </Link>
        </form>
      </div>

      <div>
        <Link
          to='/login'
          className='flex items-center justify-center bg-[#111] text-white mb-7 rounded px-4 py-2 border w-full text-lg'
        >
          Join a fleet
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;