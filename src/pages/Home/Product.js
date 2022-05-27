import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, perproduct, instock, minimumorder } = product;
    // console.log(product)
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div>
            {/* <h2>Tools Parts</h2> */}
            <div class="grid-cols-3">
                <div class="card lg:max-w-lg shadow-xl">
                    <figure><img src={img} alt="" /></figure>
                    <div class="card-body text-center">
                        <h2 className="text-xl font-bold text-accent">{name}</h2>
                        <p>{description}</p>
                        <div class="grid grid-cols-3 font-bold">
                            <p><small>Price: ${perproduct}/<sub>PP</sub></small></p>
                            <p><small>In Stock: {instock}</small></p>
                            <p class="font-bold"><small>MOQ: {minimumorder}/p</small></p>
                        </div>
                        <div class="card-actions justify-center">
                            <label htmlFor="purchase-modal" onClick={() => navigateToServiceDetail(_id)} class="btn btn-primary">Checkout</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;