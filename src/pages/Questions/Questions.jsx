import "./Questions.css";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

// Import Data
import dsaQuestions from "../../data/coding/dsa";
import developmentQuestions from "../../data/coding/development";
import debuggingQuestions from "../../data/coding/debugging";

import probabilityQuestions from "../../data/aptitude/probability";
import percentageQuestions from "../../data/aptitude/percentage";
import timeWorkQuestions from "../../data/aptitude/timeWork";

import tcsQuestions from "../../data/interview/tcs";
import infosysQuestions from "../../data/interview/infosys";

const Questions = () => {
  const { topic } = useParams();

  const allQuestions = {
    dsa: dsaQuestions,
    development: developmentQuestions,
    debugging: debuggingQuestions,
    probability: probabilityQuestions,
    percentage: percentageQuestions,
    timeWork: timeWorkQuestions,
    tcs: tcsQuestions,
    infosys: infosysQuestions,
  };

  // Fallback to empty array if topic doesn't exist
  const questions = allQuestions[topic] || [];

  return (
    <>
      <Navbar />

      <div className="questions-page">
        <h1>{topic?.toUpperCase()} Questions</h1>

        <div className="questions-list">
          {questions.length > 0 ? (
            questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
              />
            ))
          ) : (
            <h2>No Questions Found</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Questions;