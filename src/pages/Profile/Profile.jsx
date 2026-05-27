import "./Profile.css";

import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

import Navbar from "../../components/Navbar/Navbar";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-card">
          <h2>User Profile</h2>

          <p>
            <strong>Name:</strong>

            {user?.user?.name}
          </p>

          <p>
            <strong>Email:</strong>

            {user?.user?.email}
          </p>

          <p>
            <strong>Phone:</strong>

            {user?.user?.phone}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;