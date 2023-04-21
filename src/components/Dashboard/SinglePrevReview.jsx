import React from "react";

export default function SinglePrevReview({ singleReview, refetch }) {
  const { timestamp, review } = singleReview;

  return (
    <div className="card bg-transparent rounded-none shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{timestamp}</h2>
        <p>{review}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
