import FeedbackItem from "./FeedbackItem";
// import PropTypes from "prop-types";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  //calling the context here
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>'No Feedback yet'</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((itemm) => (
        <FeedbackItem key={itemm.id} item={itemm} />
      ))}
    </div>
  );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
