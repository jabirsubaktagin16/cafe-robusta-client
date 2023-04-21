import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import useUserDetails from "../../hooks/useUserDetails";
import PageTitle from "../Shared/PageTitle";

export default function AddReview() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { user } = useContext(AuthContext);

  const [currentUser] = useUserDetails(user?.email);

  const { name } = currentUser;

  const onSubmit = async (data) => {
    const review = {
      email: user?.email,
      name: user?.displayName || name,
      review: data.review,
      timestamp: new Date(),
    };

    fetch("http://localhost:8000/api/v1/reviews/new-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Your review was posted successfully");
        reset();
      });
  };
  return (
    <React.Fragment>
      <PageTitle title="Add A Review" />
      <div className="my-20 lg:px-20 px-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Review Input Field */}
          <div className="form-control min-w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-primary text-center">
                Add a New Review
              </span>
            </label>
            <textarea
              className="input input-bordered min-w-full h-28 resize-none bg-transparent rounded-none"
              placeholder="Enter Your Review Here"
              {...register("review", {
                required: {
                  value: true,
                  message: "Review is required",
                },
              })}
            />
            <label className="label">
              {errors.review?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.review.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn btn-primary rounded-none float-right"
            value="Post"
            type="submit"
          />
        </form>
      </div>
    </React.Fragment>
  );
}
