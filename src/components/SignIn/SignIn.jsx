import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";
import PageTitle from "../Shared/PageTitle";

export default function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user, loading, signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (loading) return <Loading />;

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <React.Fragment>
      <PageTitle title="Sign In" />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("./signin-banner.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center text-white lg:text-left">
            <h1 className="text-5xl anton-font uppercase">Sign In now!</h1>
            <p className="py-6 text-lg">
              Welcome to Café Robusta, where every sip is an experience. Savor
              the aroma and taste of our handcrafted coffee blends, and enjoy a
              cozy and inviting atmosphere. We can't wait to serve you!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                  <label className="label">
                    <button
                      // onClick={resetPassword}
                      className="uppercase label-text-alt btn-link hover:no-underline"
                    >
                      Forgot password?
                    </button>
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-primary">Sign In</button>
                </div>
              </form>
              <p className="text-center">
                <small>
                  New to Café Robusta?{" "}
                  <Link className="text-primary" to="/signup">
                    Create New Account
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
