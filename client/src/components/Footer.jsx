import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid border-top border-primary py-4">
      <div className="row">
        <div className="col-12 col-lg-4 text-center text-lg-start mb-3 mb-lg-0">
          <Link to="/" className="fs-3 text-decoration-none">
            Blog <span className="text-primary">App</span>
          </Link>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row text-center text-lg-start">
            <div className="col-6 col-lg-4 mb-3">
              <span className="fs-6 fw-medium">FOLLOW US</span>
              <div className="mt-2">
                <Link to="/" className="text-decoration-none d-block">
                  GitHub
                </Link>
                <Link to="/" className="text-decoration-none d-block">
                  Discord
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-4 mb-3">
              <span className="fs-6 fw-medium">LEGAL</span>
              <div className="mt-2">
                <Link to="/" className="text-decoration-none d-block">
                  Privacy Policy
                </Link>
                <Link to="/" className="text-decoration-none d-block">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <span className="fs-6 fw-medium">CONTACT US</span>
              <div className="mt-2">
                <Link to="/" className="text-decoration-none d-block">
                  Email
                </Link>
                <Link to="/" className="text-decoration-none d-block">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
