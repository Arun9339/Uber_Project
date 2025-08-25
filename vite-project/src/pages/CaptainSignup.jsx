import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ firstName, lastName, email, password })
    // later connect with backend here
  }

  return (
    <div className="p-5 max-w-md mx-auto">
      {/* Logo */}
      <img
        src="https://imgs.search.brave.com/2-ETdqgg6kcI7QUMz2PjVNGAO2G5jXgkh17yvlZreFQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzEvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n"
        alt="Uber Logo"
        className="h-20 mb-10 w-16"
      />

      {/* Form */}
      <form onSubmit={submitHandler} className="flex flex-col">
        {/* Name */}
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
          Signup
        </button>
      </form>

      {/* Login Link */}
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Login
        </Link>
      </p>

      {/* Policy */}
      <div className="mt-5">
        <p className="text-[10px] leading-tight text-gray-600">
          By proceeding, you consent to receive calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the number provided. 
          You may opt out anytime in your app settings. <br />
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup