import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Blog <span className="text-primary">App</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex mx-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0 mx-5">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            {currentUser ? (
              <div className="dropdown">
                <img
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  src={currentUser.profilePicture}
                  alt="profile pic"
                  className="rounded-circle img-fluid dropdown-toggle"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                  }}
                />
                <ul
                  className="dropdown-menu text-wrap"
                  style={{
                    minWidth: "200px",
                    maxWidth: "250px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <li>
                    <span className="d-block fs-6 mx-2">
                      {currentUser.username}
                    </span>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dashboard?tab=profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mt-2 mx-2" to="/">
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/sign-in">
                <button type="submit" className="btn btn-outline-primary w-100">
                  Sign In
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
