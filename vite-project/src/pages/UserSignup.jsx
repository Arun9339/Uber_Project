import React from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [userData, setuserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setuserData({
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        })
        setemail('')
        setpassword('')
        setfirstName('')
        setlastName('')
    }

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
                        valyue={firstName}
                        onChange={(firstName) => setfirstName(firstName.target.value)}
                            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-lg placeholder:text-base flex-1"
                            required
                            type="text"
                            placeholder="First name"
                        />
                        <input
                        value={lastName}
                        onChange={(lastName) => setlastName(lastName.target.value)}
                            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-lg placeholder:text-base flex-1"
                            required
                            type="text"
                            placeholder="Last name"
                        />
                    </div>

                    {/* Email */}
                    <h3 className="text-lg font-medium mb-2">What's your email</h3>
                    <input
                       valyue={email}
                        onChange={(email) => setemail(email.target.value)}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        type="email"
                        placeholder="Your email"
                    />

                    {/* Password */}
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                       valyue={password}
                        onChange={(password) => setpassword(password.target.value)}
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
                        Login
                    </button>
                </form>
                {/* Login Link */}
                <p className="text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600">
                        Login
                    </Link>
                </p>

            </div>

            {/* Captain Login */}
            <div>
                <p className='text-[6px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google privacy policy</span>and <span className='underline'>Terms of service apply</span></p>
            </div>
        </div>
    )
}

export default UserSignup
