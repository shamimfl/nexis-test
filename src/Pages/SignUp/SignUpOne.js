import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const SignUpOne = ({ setFirstName, setLastName }) => {

    return (
        <div>
            <div>
                <h1 className='text-center font-semibold text-xl mb-20'>SignUp Form</h1>
                <input className='border-b-2 text-xl px-4 block w-full mb-8 focus:outline-none' onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='Write First Name' />
                <input className='border-b-2 text-xl px-4 block w-full  focus:outline-none' onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Write Last Name' />
                <Link to='/signup/two' className='bg-primary px-4 py-3 hover:bg-white btn rounded-[15px] w-40 mt-20 font-bold text-white mx-auto shadow-xl flex items-center justify-center gap-3'>
                    Next Step
                    <ArrowForwardIcon></ArrowForwardIcon>
                </Link>
                <div className='md:flex justify-center items-center  mt-16 gap-3'>
                    <p className='text-extra text-center'>Already have an account? </p>
                    <Link to='/login' className='text-primary text-center block font-bold uppercase underline'>LOGIN HERE!</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpOne;