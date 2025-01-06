import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 px-3">
        {/* Left Content  */}
        <div className="col-lg-6 col-md-6 col-12 mb-4 text-center text-md-start">
          <h1 className="fw-bold">
            Swapnil <span className="text-primary">Blog</span>
          </h1>
          <p className="text-secondary">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>

        {/* Right Content  */}
        <div className="col-lg-6 col-md-6 col-12">
          <div className="card shadow">
            <div className="card-header text-center fs-3">SignUp</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-2">
                  Sign Up
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mb-2"
                >
                  Continue With Google
                </button>
              </form>
              <div className="d-flex gap-2">
                <span>Have an account?</span>
                <Link to="/sign-in" className="text-primary">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
