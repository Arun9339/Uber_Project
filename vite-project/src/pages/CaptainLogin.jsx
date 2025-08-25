import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});


    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        })
        setEmail('');
        setPassword('');
    }
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
            <div>
                <img
                    src="https://imgs.search.brave.com/2-ETdqgg6kcI7QUMz2PjVNGAO2G5jXgkh17yvlZreFQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzEvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n"
                    alt="Uber Logo"
                    className="h-20  mb-10 w-16  "
                />
                <form onSubmit={(e) => submitHandler(e)} className='flex flex-col'>
                    <h3 className='text-lg font-medium'>What's your email</h3>
                    <input
                        value={email}
                        onChange={(email) => setEmail(email.target.value)  }
                        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required type="email" placeholder=' your email' />
                    <h3>
                        Enter Password
                    </h3>
                    <input
                     value={email}
                        onChange={(password) => setEmail(password.target.value)  } 
                    required

                        type="password" placeholder=' your password' />
                    <button
                        className='bg-[#111] text-white f mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type='submit'>Login</button>

                    <p>New here?</p>     <Link to ='/CaptainSignup' className="text-blue-600">Create new account</Link>
                </form>
            </div>
            <div>
                <Link
                to = '/login'
                 className=' flex items-center justify-center  bg-[#111] text-white f mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
                    Join a fleet</Link>
            </div>
        </div>
  )
}

export default CaptainLogin