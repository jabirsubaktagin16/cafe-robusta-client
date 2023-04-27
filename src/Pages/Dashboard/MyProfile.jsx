import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/Shared/PageTitle";
import { AuthContext } from "../../contexts/AuthProvider";
import useUserDetails from "../../hooks/useUserDetails";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  const currentEmail = user?.email;

  const [currentUser] = useUserDetails(currentEmail);

  const navigate = useNavigate();

  const { _id, img, name, occupation, location, contactNo } = currentUser;

  return (
    <React.Fragment>
      <PageTitle title="My Profile" />
      <div
        className="flex justify-center items-center lg:px-20"
        style={{ minHeight: "100vh" }}
      >
        <div className="card w-full rounded-none shadow-md">
          <div className="card-body">
            <h2 className="text-xl text-center">Profile Information</h2>
            <div id="info">
              <div className="form-control">
                <label className="input-group">
                  <span className="w-full bg-transparent">Name</span>
                  <input
                    type="text"
                    className="input w-full bg-transparent rounded-none font-semibold"
                    value={name}
                    readOnly
                  />
                </label>
                <label className="input-group">
                  <span className="w-full bg-transparent">E-Mail</span>
                  <input
                    type="text"
                    className="input w-full bg-transparent rounded-none font-semibold"
                    value={currentEmail}
                    readOnly
                  />
                </label>
                <label className="input-group">
                  <span className="w-full bg-transparent">Contact No</span>
                  <input
                    type="text"
                    className="input w-full bg-transparent rounded-none font-semibold"
                    value={contactNo}
                    readOnly
                  />
                </label>
                <label className="input-group">
                  <span className="w-full bg-transparent">Occupation</span>
                  <input
                    type="text"
                    className="input w-full bg-transparent font-semibold"
                    value={occupation || "Not Yet Provided"}
                    readOnly
                  />
                </label>
                <label className="input-group">
                  <span className="w-full bg-transparent">Address</span>
                  <input
                    type="text"
                    className="input w-full bg-transparent font-semibold"
                    value={location || "Not Yet Provided"}
                    readOnly
                  />
                </label>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
