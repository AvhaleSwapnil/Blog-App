import { useSelector } from "react-redux";
export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="mw-lg mx-auto p-3 w-100">
      <h1 className="my-5 text-center">Profile</h1>
      <form className="d-flex flex-column align-items-center">
        <div
          style={{ width: "150px", height: "150px" }}
          className="cursor-pointer d-flex justify-content-center align-items-center overflow-hidden"
        >
          <img
            src={currentUser.profilePicture}
            alt="profile picture"
            className="rounded-circle w-100 h-100 border border-5 border-primary"
          />
        </div>
        <div className="w-50">
          <input
            type="text"
            className="form-control my-3"
            id="username"
            placeholder="Enter your username"
            defaultValue={currentUser.username}
          />
          <input
            type="email"
            className="form-control my-3"
            id="email"
            placeholder="Enter your Email"
            defaultValue={currentUser.email}
          />
          <input
            type="password"
            className="form-control my-3"
            id="password"
            placeholder="Password"
          />
          <button
            className="btn btn-outline-primary w-100 text-uppercase"
            type="submit"
          >
            Update
          </button>
          <div className="text-danger d-flex justify-content-between my-3">
            <span className="cursor-pointer">Delete Account</span>
            <span className="cursor-pointer">Sign Out</span>
          </div>
        </div>
      </form>
    </div>
  );
}
