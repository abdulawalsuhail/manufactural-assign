import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import './PeoductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
//   console.log(productId)
  const [user] = useAuthState(auth);
  const [item, setItem] = useState({});
//   console.log(item)


  useEffect(() => {
    const url = `https://assignment-manu-12.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [productId]);

  const { register, handleSubmit, watch } = useForm();
  const orderQuantity = watch("MOQ");

  const onSubmit = (data, e) => {
    data.item = item;
    // console.log(data);
    const url = `https://assignment-manu-12.herokuapp.com/order`;
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
        toast.success("Your Order Successfully Added");
      });
  };

  return (
    <div className="">
      <div className="card purchase-container lg:card-side bg-base-100">
        <figure>
          <img className="w-96 p-5" src={item.img} alt="Album" />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.description}</p>
          <div className="product-detail">
            <p className="text-3xl">
              {" "}
              Price : <span className="font-bold">{item.perproduct}$</span>
            </p>
            <p className="text-xl">
              <small>
                Stock :{" "}
                <span className="text-orange-500 font-bold">
                  {item.minimumorder}p
                </span>
              </small>
            </p>
            <p className="text-xl">
              <small>
                Minimum Order :{" "}
                <span className="text-orange-500 font-bold">
                  {" "}
                  {item.minimumorder}p
                </span>
              </small>
            </p>
          </div>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" order-detail mt-5">
                <div>
                  <input
                    type="text"
                    placeholder="Type here"
                    value={user?.displayName}
                    readOnly
                    {...register("name", { required: true })}
                    className="input"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Type here"
                    value={user?.email}
                    readOnly
                    {...register("email", { required: true })}
                    className="input"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Phone"
                    {...register("phone", { required: true })}
                    className="input"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Your Address"
                    {...register("address", { required: true })}
                    className="input"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Order Quantity"
                    {...register("MOQ", { required: true })}
                    className="input"
                  />
                </div>
                <div className="">
                  <button
                    disabled={
                      orderQuantity < item.minimumorder ||
                      orderQuantity > item.instock
                    }
                    type="submit"
                    className="btn btn-accent"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;