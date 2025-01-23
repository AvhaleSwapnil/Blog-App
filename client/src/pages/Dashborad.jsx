import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";
export default function Dashborad() {
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
    <div className="d-flex flex-sm-row flex-column">
      <div className="">
        {/* sidebar */}
        <DashSidebar />
      </div>
      {/* profile */}
      {tab == "profile" && <DashProfile />}
    </div>
  );
}
