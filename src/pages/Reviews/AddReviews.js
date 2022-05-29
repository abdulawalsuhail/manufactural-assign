import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReviews = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit, watch } = useForm();
    const review = watch("rating");
    const onSubmit = (data, e) => {
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                e.target.reset();
                toast("Your Review Added");
            });
    };

    return (
        <div className="flex justify-center h-screen items-center">
            <div className="login-container">
                <div className="">
                    <h2 className="login-title">Add Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                value={user.displayName}
                                readOnly
                                {...register("name", { required: true })}
                                className="input input-bordered  w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                placeholder=" Rating here 1 to 5"
                                {...register("rating", { required: true })}
                                className="input input-bordered  w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control  w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                {...register("description")}
                                className="input input-bordered input-lg w-full max-w-xs"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                disabled={review > 5 || review < 1}
                                type="submit"
                                className="btn btn-wide mt-3"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;