import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../Context/userContext';
const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});


  const navigate = useNavigate(); 

  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
      if(response.status === 201 || response.status === 200){
          const data = response.data;
          // Update user context with the correct structure
          setUser({
            email: data.user.email,
            fullName: {
              firstName: data.user.fullname?.firstname || firstName,
              lastName: data.user.fullname?.lastname || lastName
            }
          });
          navigate('/home'); 
      } else {
        console.error('Unexpected response status:', response.status);
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please check your connection and try again.');
    }

    // Reset form fields
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="p-7 flex flex-col h-screen justify-between">
      <div>
        <img
          src="https://imgs.search.brave.com/2-ETdqgg6kcI7QUMz2PjVNGAO2G5jXgkh17yvlZreFQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzEvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n"
          alt="Uber Logo"
          className="h-20 mb-10 w-16"
        />

        <form onSubmit={submitHandler} className="flex flex-col">
          {/* Name Fields */}
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-3">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-lg placeholder:text-base flex-1"
              required
              type="text"
              placeholder="First name"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-lg placeholder:text-base flex-1"
              required
              type="text"
              placeholder="Last name"
            />
          </div>

          {/* Email */}
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="Your email"
          />

          {/* Password */}
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="Your password"
          />

          {/* Submit */}
          <button
            className="bg-[#111] text-white mb-7 rounded px-4 py-2 w-full text-lg"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div>
        <p className="text-[6px] leading-tight text-center">
          This site is protected by reCAPTCHA and the{' '}
          <span className="underline">Google Privacy Policy</span> and{' '}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;