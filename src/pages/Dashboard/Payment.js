import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1q3WE0xC6pJnzNqbL58cmnStdQ96dmd83YSSgTup8CKLwHeXhqc95XV4dhQMCSLigvSyb47o79xK5CdAnNTWXO00vyRfL5ey');

const Payment = () => {
    const { id } = useParams();
    const url = `https://assignment-manu-12.herokuapp.com/order/${id}`;

    const { data: product, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(product)
    if (isLoading) {
        return <Loading></Loading>
    }


    // const totalPrice = product.item.perproduct * product?.minimumorder
    // console.log(totalPrice)


    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {product?.name}</p>
                    <h2 class="card-title">Please Pay for {product?.name}</h2>

                    <p>Please pay: ${product?.item?.perproduct}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise} >
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;