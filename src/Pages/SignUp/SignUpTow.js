import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const SignUpTwo = ({ setPhone, setEmail }) => {
    return (
        <div>
            <h1 className='text-center font-semibold text-xl md:mb-20 mb-10'>SignUp Form</h1>
            <div className='flex gap-2'>
                <input type="text" className='border-b-2 text-xl px-4 block w-2/5 mb-8 focus:outline-none' readOnly defaultValue={'+88'} />
                <input className='border-b-2 text-xl px-4 block w-full mb-8 focus:outline-none' onChange={(e) => setPhone(e.target.value)} type="number" placeholder='01xxxxxxxxx' />
            </div>
            <input className='border-b-2 text-xl px-4 block w-full  focus:outline-none' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Write Email Address' />
            <div className='flex items-center mt-20'>
                <Link to='/' className='font-bold text-extra hover:bg-slate-300 px-3 py-1 rounded-3xl'>Back</Link>
                <Link to='/signup/three' className='bg-primary px-4 py-3 hover:bg-white btn rounded-[15px] w-40 font-bold text-white mx-auto shadow-xl flex items-center gap-3'>
                    Next Step
                    <ArrowForwardIcon></ArrowForwardIcon>
                </Link>
            </div>
        </div>
    );
};

export default SignUpTwo;