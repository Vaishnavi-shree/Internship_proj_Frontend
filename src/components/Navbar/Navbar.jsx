import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        Mini Career Portal
      </h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        {user ? (
          <>
            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/profile">
              Profile
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Signup
            </Link>
          </>
        )}

      </div>
    </nav>
  );
};

export default Navbar;