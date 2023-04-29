import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import SinglePrevReview from "./SinglePrevReview";

export default function PrevReviews() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-reviews"],
    queryFn: async () => {
      const res = await fetch(
        `https://cafe-robusta-server.onrender.com/api/v1/reviews/all-reviews?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (res.status === 401 || res.status === 403) {
        logOut()
          .then(() => {
            localStorage.removeItem("accessToken");
            toast("Please Sign In First");
            navigate("/signin");
          })
          .catch((err) => console.log(err));
      }
      const data = await res.json();
      return data.response;
    },
  });

  /* if (isLoading) {
    return <Loading />;
  } */

  return (
    <React.Fragment>
      <div className="my-20 lg:px-20 px-6">
        <h6 className="label-text text-xl font-bold text-primary">
          Previous Reviews
        </h6>
        <div>
          {reviews?.map((singleReview) => (
            <SinglePrevReview
              key={singleReview._id}
              singleReview={singleReview}
              refetch={refetch}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
