import "./QuestionCard.css";

const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <h3>{question.question}</h3>
    </div>
  );
};

export default QuestionCard;