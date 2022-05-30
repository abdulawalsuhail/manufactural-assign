import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyPurchase = () => {
    const [purchases, setPurchases] = useState([]);
    // const [deletingOrder, setDeletingOrder] = useState(null);
    // console.log(purchases)
    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    useEffect(() => {

        fetch(`https://assignment-manu-12.herokuapp.com/order?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {
                // console.log(data)
                setPurchases(data)
            });

    }, [user, navigate])

    const handleDelete = id => {
        fetch(`https://assignment-manu-12.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const remaining = purchases.filter((data) => data._id !== id);
                toast.success("Delete Success fully");
                // setDeletingOrder(null);
                setPurchases(remaining)
            })
    }



    return (
        <div>
            <h2>My Purchase: {purchases.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            {/* <th>Price</th> */}
                            <th>Order Quantity</th>
                            <th>payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases?.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                {/* <td>{a.totalPrice}</td> */}
                                <td>{a.MOQ}</td>
                                <td><button className='btn btn-xs btn-success'>pay</button></td>
                                <td><button className='btn btn-xs btn-secondary ' onClick={() => handleDelete(a._id)}>Delete</button></td>
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