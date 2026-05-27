import "./Signup.css";

import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();

  const { signup } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(formData);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <h2>Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;