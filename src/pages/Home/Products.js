import React, { useEffect, useState } from 'react';
import Product from '../Home/Product'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = 'https://assignment-manu-12.herokuapp.com/product'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
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
           
        </div>
    );
};

export default Products;