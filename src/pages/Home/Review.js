import React from "react";
import "./Reviews.css";

const Review = ({ review }) => {
  const { name, rating, description } = review;
  return (
    <div className="card bg-base-100 review-cart">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.slice(0, 100)}
          <small className="ms-2 text-gray-400">SeeMore...</small>
        </p>
        <div className="card-actions justify-between items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
            </div>
          </div>
          <div className="rating-info">
            <div>
              <span>Review : </span>
              <span className="text-xl">{rating}</span>
            </div>
            <img src="" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;