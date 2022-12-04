import React from 'react';
import people from '../../Image/people.png'
import { Link, Outlet } from 'react-router-dom';
import './SignUp.css'
import logo from '../../Image/logo.svg'

const SignUp = () => {

    return (
        <div className='md:flex justify-between items-center p-5'>
            <div className='md:h-[437px] md:w-[612px]'>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
                <img src={people} alt="" />
            </div>
            <div className='md:w-[516px] h-[630px] shadow-2xl mt-10 md:p-20 p-5 flex items-center'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default SignUp;