import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Attendance from '../Attendance/Attendance';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import SignUpOne from '../SignUp/SignUpOne';
import SignUpThree from '../SignUp/SignUpThree';
import SignUpTwo from '../SignUp/SignUpTow';

const Main = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        const UserData = {
            "first_name": firstName,
            "last_Name": lastName,
            "phone_number": phone,
            "email": email,
            "password": password
        }
        console.log(UserData)
        fetch('https://test.nexisltd.com/signup', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UserData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.sucess) {
                    toast.success(data.sucess)
                    handleLogin()
                }
            })





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
    }


    return (
        <div>
            <Routes>
                <Route path='/' element={<SignUp />}>
                    <Route path='/' element={<SignUpOne setLastName={setLastName} setFirstName={setFirstName}></SignUpOne>}></Route>
                    <Route path='/signup/two' element={<SignUpTwo setPhone={setPhone} setEmail={setEmail}></SignUpTwo>}></Route>
                    <Route path='/signup/three' element={<SignUpThree handleSignUp={handleSignUp} password={password} setPassword={setPassword}></SignUpThree>}></Route>
                </Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/attendance' element={<Attendance></Attendance>}></Route>
            </Routes>
        </div>
    );
};

export default Main;