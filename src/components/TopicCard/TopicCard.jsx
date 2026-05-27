import "./TopicCard.css";

const TopicCard = ({ title, onClick }) => {
  return (
    <div
      className="topic-card"
      onClick={onClick}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default TopicCard;