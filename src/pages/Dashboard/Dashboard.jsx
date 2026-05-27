import "./Dashboard.css";

import { useNavigate } from "react-router-dom";

import CategoryCard from "../../components/CategoryCard/CategoryCard";

import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Preparation Categories</h1>

        <div className="dashboard-grid">

          <CategoryCard
            title="Aptitude"
            topics={3}
            onClick={() =>
              navigate("/category/aptitude")
            }
          />

          <CategoryCard
            title="Coding"
            topics={3}
            onClick={() =>
              navigate("/category/coding")
            }
          />

          <CategoryCard
            title="Interview"
            topics={2}
            onClick={() =>
              navigate("/category/interview")
            }
          />

        </div>
      </div>
    </>
  );
};

export default Dashboard;