import "./CategoryCard.css";

const CategoryCard = ({ title, topics, onClick }) => {
  return (
    <div
      className="category-card"
      onClick={onClick}
    >
      <h2>{title}</h2>

      <p>{topics} Topics</p>
    </div>
  );
};

export default CategoryCard;