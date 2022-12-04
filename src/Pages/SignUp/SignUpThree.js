import React from 'react';
import { Link } from 'react-router-dom';

const SignUpThree = ({ setPassword, password, handleSignUp }) => {
    return (
        <div>
            <h1 className='text-center font-semibold text-xl mb-20'>SignUp Form</h1>
            <input className='border-b-2 px-4 block w-full focus:outline-none text-xl font-medium' onChange={(e) =>setPassword(e.target.value)} type="password" placeholder='Write Password' />
            <p className='text-extra text-sm px-4'>Your password must be 8 character</p>
            <div className='flex items-center mt-20'>
                <Link to='/signup/two' className=' font-bold text-extra hover:bg-slate-300 px-3 py-1 rounded-3xl'>Back</Link>
                <button onClick={handleSignUp} to='/signup/three' className={`bg-primary px-4 py-3 hover:bg-white btn rounded-[15px]   font-bold text-white mx-auto shadow-xl flex items-center gap-3 ${password.length > 7 ? 'block' : 'hidden'}`}>
                    Sign Up
                </button>
                <button to='/signup/three' className={`bg-red-400 px-4 py-3 hover:bg-white btn rounded-[15px]   font-bold text-white mx-auto shadow-xl flex items-center gap-3 ${password.length > 7 ? 'hidden' : 'block'}`}>
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUpThree;