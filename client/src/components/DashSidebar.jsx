import { useEffect, useState } from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlPrams = new URLSearchParams(location.search);
    const tabFromUrl = urlPrams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="bg-light border-end d-flex flex-column flex-sm-row h-100">
      <div className="p-3 p-sm-5">
        <ul className="nav flex-column text-center cursor-pointer">
          <li className="nav-item d-flex align-items-center">
            <HiUser className="fs-5" />
            <Link
              className={`nav-link ${
                tab == "profile" ? "active text-black" : ""
              } fs-5`}
              to="/dashboard?tab=profile"
            >
              Profile
            </Link>
            <span className="badge text-bg-secondary fs-6">User</span>
          </li>
          <li className="nav-item fs-5 d-flex align-items-center">
            <HiArrowSmRight className="fs-5" />
            <Link className="nav-link" to="/signout">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
