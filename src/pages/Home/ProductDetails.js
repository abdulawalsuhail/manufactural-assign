
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';




const ProductDetails = ({setBooked }) => {
    // const { _id, name, instock, price, perproduct, minimumorder, description } = product;
    const { productId } = useParams();
    // const formattedDate = format(date, 'PP');

    const [product, setProduct] = useState({});
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    const handlePurchase = event => {
        event.preventDefault();
        // const perproduct = event.target.perproduct.value;

        const booking = {
            productId:product._id,
            product: product.name,
            productInStock:product.instock,
            productPrice:product.perproduct,
            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value
        }
        console.log(booking)

        fetch('https://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Your order done.Your product price ${product.perproduct}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setProduct(null);
                setBooked(pre => !pre)

            });
    }
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product.img} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold my-8"> {product.name}</h1>
                        <p><span class="text-accent font-bold">Product description</span>: {product.description}</p>
                        <h2> <span class="text-accent font-bold">Product Price</span> : ${product.perproduct}/pp</h2>
                        <h2> <span class="text-accent font-bold">Product In Stock</span> : {product.instock}</h2>
                        <h2><span class="text-accent font-bold">Minimum Order Quantity</span> : {product.minimumorder}</h2>
                    </div>
                </div>
            </div>
            <div class="py-4">
            <h1 class="text-3xl font-bold my-8 text-center">Purchase Now : {product.name}</h1>
                <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="Address" placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="number" name="MOQ" placeholder="Minimum order Quantity 100 " className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Purchase" className="btn btn-accent w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};
 
export default ProductDetails;