import React from "react";
import { toast } from "react-hot-toast";

export default function DeleteConfirmModal({
  deletingMenu,
  refetch,
  setDeletingMenu,
}) {
  const { title, _id } = deletingMenu;

  const handleDelete = () => {
    fetch(`http://localhost:8000/api/v1/foods/manageMenu/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response.deletedCount > 0) {
          toast.success(`${title} is deleted`);
          setDeletingMenu(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete {title}?
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
