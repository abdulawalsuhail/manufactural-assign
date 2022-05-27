import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyPurchase = () => {
    const [purchases, setPurchases] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/product?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setPurchases(data));
        }
    }, [user])

    return (
        <div>
            <h2>My Purchase: {purchases.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>In Stock</th>
                            <th>Payment</th>
                            <th>Order Quantity</th>
                            <th>Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        purchases.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.customerName}</td>
                            <td>{a.product}</td>
                            <td>{a.instock}</td>
                            <td>{a.price}</td>
                            {/* <td>{a.price}</td> */}
                            <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}
                            </td>
                        </tr>)
                    }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPurchase;