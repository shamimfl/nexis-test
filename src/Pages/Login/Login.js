import React, { useState } from 'react';
import people from '../../Image/people.png'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Image/logo.svg'
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const UserData = { "email": email, "password": password }
        fetch('https://test.nexisltd.com/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UserData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.access_token) {
                    localStorage.setItem('ultimate_token', data.access_token)
                    navigate('/attendance')
                }
                else {
                    toast.error('Unknown User')
                }
            })
    }


    return (
        <div className='md:flex justify-between items-center p-5'>
            <div className='md:h-[437px] md:w-[612px]'>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
                <img src={people} alt="" />
            </div>
            <div className='md:w-[516px] md:h-[630px] shadow-2xl mt-10 md:p-20 p-5 flex items-center'>
                <div>
                    <h1 className='text-center font-semibold text-xl mb-20'>SignUp Form</h1>
                    <input className='border-b-2  px-4 block w-full mb-8 focus:outline-none' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Write Email Address' />
                    <input className='border-b-2  px-4 block w-full  focus:outline-none' onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Write Password' />
                    <p className='text-extra px-4'>Your password must be 8 character</p>
                    <button onClick={handleLogin} className='bg-primary px-4 py-3 hover:bg-white btn rounded-[15px]  mt-20 font-bold text-white mx-auto shadow-xl flex items-center gap-3'>
                        Login
                    </button>
                    <div className='md:flex justify-center items-center text-center mt-16 gap-3'>
                        <p className='text-extra'>Don’t have an account?</p>
                        <Link to='/' className='text-primary font-bold uppercase underline'>SIGNUP HERE!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;