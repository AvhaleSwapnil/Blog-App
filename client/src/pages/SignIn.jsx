import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure("All fields are required.."));
    }
    try {
      dispatch(signInStart);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 px-3">
        {/* Left Content  */}
        <div className="col-lg-6 col-md-6 col-12 mb-4 text-center text-md-start">
          <h1 className="fw-bold">
            Swapnil <span className="text-primary">Blog</span>
          </h1>
          <p className="text-secondary">
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>

        {/* Right Content  */}
        <div className="col-lg-6 col-md-6 col-12">
          <div className="card shadow">
            <div className="card-header text-center fs-3">SignIn</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-2"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="spinner-border text-white" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mb-2"
                >
                  Continue With Google
                </button>
              </form>
              <div className="d-flex gap-2">
                <span>Dont have an account?</span>
                <Link to="/sign-up" className="text-primary">
                  Sign Up
                </Link>
              </div>
              {errorMessage && (
                <div className="alert alert-danger mt-2" role="alert">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
