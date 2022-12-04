import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.svg'

const Attendance = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('ultimate_token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])

    let arr = []



    for (let i in users) {
        arr.push(users[i])
    }

    return (
        <div className='mt-10 p-5'>
            <Link to='/'><img src={logo} alt="" /></Link>

            <section>
                <h1 className='w-96 bg-primary text-center p-3  btn-cus border-0 font-bold text-xl rounded mx-auto text-white'>Attendance information</h1>
                <div className="overflow-x-auto w-full md:p-20">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>position</th>
                                <th>status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arr.map(user => (
                                    <tr>
                                        <th></th>
                                        <th>{(Object.keys(user.attendance)[1])}</th>
                                        <td>{user.name}</td>
                                        <td>{user.position}</td>
                                        <td>{Object.values(user.attendance)[1].status}</td>
                                    </tr>
                                ))
                            }




                        </tbody>

                    </table>
                </div>
            </section>
        </div>
    );
};

export default Attendance;