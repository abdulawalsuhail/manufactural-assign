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
        const url = `https://manufact-server-assign-production.up.railway.app/product`;
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
                // console.log(result);
            });
    };

    return (
        <div className="form-control w-full max-w-xs m-4">
            <div className="uppercase text-center text-primary font-bold text-2xl">Product Detail</div>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input input-bordered w-full max-w-xs my-3"
                        placeholder="Product Name"
                        required
                        {...register("name", { maxLength: 20 })}
                    />
                    <textarea
                        className="input input-bordered w-full max-w-xs my-3"
                        placeholder="description"
                        required
                        {...register("description")}
                    />
                    <input
                        className="input input-bordered w-full max-w-xs my-3"
                        placeholder="Product price"
                        type="number"
                        required
                        {...register("perproduct")}
                    />
                    <input
                        className="input input-bordered w-full max-w-xs my-3"
                        placeholder="quantity"
                        type="number"
                        required
                        {...register("instock")}
                    />
                    <input
                        className="input input-bordered w-full max-w-xs my-3"
                        placeholder="Minimum Order"
                        type="number"
                        required
                        {...register("minimumorder")}
                    />
                    <input
                        className="input input-bordered w-full max-w-xs my-3"
                        placeholder="Photo Url"
                        type="text"
                        required
                        {...register("img")}
                    />
                    <button type="submit" className="btn bg-purple-500 ring-2 ring-purple-500 ring-offset-4 ring-offset-purple-100">
                        Save Change
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;