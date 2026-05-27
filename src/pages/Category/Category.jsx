import "./Category.css";

import { useParams, useNavigate } from "react-router-dom";

import TopicCard from "../../components/TopicCard/TopicCard";

import Navbar from "../../components/Navbar/Navbar";

const Category = () => {
  const { type } = useParams();

  const navigate = useNavigate();

  const topics = {
    aptitude: [
      "probability",
      "percentage",
      "timeWork",
    ],

    coding: [
      "dsa",
      "development",
      "debugging",
    ],

    interview: [
      "tcs",
      "infosys",
    ],
  };

  return (
    <>
      <Navbar />

      <div className="category-page">
        <h1>{type.toUpperCase()} Topics</h1>

        <div className="topics-grid">
          {topics[type].map((topic) => (
            <TopicCard
              key={topic}
              title={topic}
              onClick={() =>
                navigate(`/questions/${topic}`)
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;