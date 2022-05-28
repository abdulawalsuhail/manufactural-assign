import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';




const ProductDetails = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});
    const [user, loading, error] = useAuthState(auth);

    const { register, formState: { errors }, getValues, watch, handleSubmit, reset } = useForm({ mode: "onBlur" });

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    const onSubmit = event => {
        // event.preventDefault();
        // const perproduct = event.target.perproduct.value;

        if (event.target?.MOQ?.value > product?.instock) {

            toast.error('Sorry!!You can not order maximum order quantity')


            return;
        }
        const totalPrice = parseInt(event.target?.MOQ?.value) * parseInt(product.perproduct);
        const booking = {
            product: product.name,
            productMOQ: event.target?.MOQ?.value,
            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value,
            totalPrice: totalPrice
        }
        console.log(booking)

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (!data?.success) {
                    toast(`Your order done.`)
                    reset()
                }
                // else {
                //     toast.error(`Already have an order.`)
                // }
                setProduct();

            });
    }

    if (loading) {
        <Loading />
    }
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product?.img} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold my-8"> {product?.name}</h1>
                        <p><span class="text-accent font-bold">Product description</span>: {product?.description}</p>
                        <h2> <span class="text-accent font-bold">Product Price</span> : ${product?.perproduct}/pp</h2>
                        <h2> <span class="text-accent font-bold">Product In Stock</span> : {product?.instock}</h2>
                        <h2><span class="text-accent font-bold">Minimum Order Quantity</span> : {product?.minimumorder}</h2>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <h1 class="text-3xl font-bold my-8 text-center">Purchase Now : {product?.name}</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your name</span>
                        </label>
                        <input type="text" name="name" placeholder='Your Name' className="input input-bordered w-full max-w-xs"   {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} />
                        <label className="label">
                            {errors?.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name.message}</span>}
                        </label>
                    </div>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your email</span>
                        </label>
                        <input type="email" name="email" placeholder='Your email' className="input input-bordered w-full max-w-xs"   {...register("email", {
                            required: {
                                value: true,
                                message: 'email is Required'
                            }
                        })} />
                        <label className="label">
                            {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Address</span>
                        </label>
                        <input type="text" name="address" placeholder='Your Address' className="input input-bordered w-full max-w-xs"   {...register("address", {
                            required: true
                        })} />
                        <label className="label">
                            {errors?.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.address.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your phone</span>
                        </label>
                        <input type="number" name="phone" placeholder='Your phone' className="input input-bordered w-full max-w-xs"   {...register("phone", {
                            required: true
                        })} />
                        <label className="label">
                            {errors?.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone.message}</span>}
                            {errors?.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.phone.message}</span>}
                        </label>
                    </div>

                    <input type="text" name="MOQ" placeholder="Minimum order Quantity 100 " className="input input-bordered w-full max-w-xs"  {...register("MOQ")} />


                    <input type="submit" value="Purchase" className="btn btn-accent w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;