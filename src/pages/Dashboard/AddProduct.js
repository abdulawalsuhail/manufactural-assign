import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";

import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        data.email = user?.email;

        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                e.target.reset();
                toast("Added New Item");
                console.log(result);
            });
    };

    return (
        <div className="login-container">
            <div className="login-title">Product Detail</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Product Name"
                    required
                    {...register("name", { maxLength: 20 })}
                />
                <textarea
                    placeholder="description"
                    required
                    {...register("description")}
                />
                <input
                    placeholder="Product price"
                    type="number"
                    required
                    {...register("price")}
                />
                <input
                    placeholder="quantity"
                    type="number"
                    required
                    {...register("quantity")}
                />
                <input
                    placeholder="Minimum Order"
                    type="number"
                    required
                    {...register("minOrder")}
                />
                <input
                    placeholder="Photo Url"
                    type="text"
                    required
                    {...register("img")}
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddProduct;