import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../components/Shared/PageTitle";

export default function AddFood() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = import.meta.env.VITE_REACT_APP_IMAGESTORAGEKEY;

  const navigate = useNavigate();

  const handleAddMenu = (data) => {
    console.log(data);
    const image = data.imageURL[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const food = {
            title: data.title,
            category: data.category,
            subCategory: data.subCategory,
            imageURL: imgData.data.url,
            price: data.price,
            details: data.details,
          };

          // save menu information to the database
          fetch("https://cafe-robusta-server.onrender.com/api/v1/foods", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(food),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.title} is added successfully`);
              navigate("/dashboard/manageMenu");
            });
        }
      });
  };

  /*  if (isLoading) {
    return <Loading></Loading>;
  } */

  return (
    <React.Fragment>
      <PageTitle title="Add New Menu" />
      <div
        className="flex justify-center items-center lg:px-20"
        style={{ minHeight: "100vh" }}
      >
        <div className="card w-full rounded-none">
          <div className="card-body">
            <h2 className="text-xl text-center">Add New Menu</h2>
            <form onSubmit={handleSubmit(handleAddMenu)}>
              {/* Title */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Menu Title"
                  className="input input-bordered w-full rounded-none bg-transparent"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Menu Title is Required",
                    },
                  })}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>
              {/* Category */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Select Category</span>
                </label>
                <select
                  className="select select-bordered rounded-none bg-transparent"
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Please select a category",
                    },
                  })}
                >
                  <option disabled selected>
                    Select one category from the list
                  </option>
                  <option value="Warm Drinks">Warm Drinks</option>
                  <option value="Cold Drinks">Cold Drinks</option>
                  <option value="Sandwiches and Wraps">
                    Sandwiches and Wraps
                  </option>
                  <option value="Flatbread Gourmet Pizzas">
                    Flatbread Gourmet Pizzas
                  </option>
                  <option value="Acai Bowls">Acai Bowls</option>
                  <option value="Salads">Salads</option>
                  <option value="Snacks and Sweets">Snacks and Sweets</option>
                  <option value="Extras">Extras</option>
                </select>
                {errors.category && (
                  <p className="text-red-500">{errors.category.message}</p>
                )}
              </div>
              {/* Sub Category */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Sub Category"
                  className="input input-bordered w-full rounded-none bg-transparent"
                  {...register("subCategory", {
                    required: {
                      value: true,
                      message: "Please Add a Sub Category",
                    },
                  })}
                />
                {errors.subCategory && (
                  <p className="text-red-500">{errors.subCategory.message}</p>
                )}
              </div>
              {/* Add Image */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Add Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered bg-transparent rounded-none"
                  {...register("imageURL", {
                    required: {
                      value: false,
                    },
                  })}
                />
              </div>
              {/* Price */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Price"
                  className="input input-bordered w-full rounded-none bg-transparent"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Pleas Add Price",
                    },
                  })}
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>
              {/* Enter Details */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Details</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 resize-none bg-transparent rounded-none"
                  placeholder="Enter Details about the Menu"
                  {...register("details", {
                    required: {
                      value: false,
                    },
                  })}
                ></textarea>
              </div>
              <div className="card-actions justify-end mt-5">
                <input
                  className="btn btn-primary rounded-none border-0 text-base-100 min-w-full"
                  value="Add"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
