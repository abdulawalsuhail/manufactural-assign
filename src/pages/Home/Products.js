import React, { useEffect, useState } from 'react';
import Product from '../Home/Product'
import PurchaseModal from './PurchaseModal';

const Products = () => {
    const [products, setProducts] = useState([])
    const [purchase, setPurchase] = useState(null);
    const [booked, setBooked] = useState(false) 

    useEffect(() => {
        const url = 'http://localhost:5000/product'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [booked])
    return (
        <div class="px-20  shadow-xl">
            <h2 class="text-5xl font-bold text-accent">Tools Parts</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            {
                purchase && <PurchaseModal
                    purchase={purchase}
                    setPurchase={setPurchase}
                    setBooked={setBooked}
                ></PurchaseModal>
            }
        </div>
    );
};

export default Products;