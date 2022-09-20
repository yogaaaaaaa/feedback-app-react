import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Card from "./components/shared/Card";
import RatingSelect from "./components/RatingSelect";
import AboutPage from "../src/components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./components/Post";
// import FeedbackItem from "./components/FeedbackItem";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(...feedback);
    console.log(newFeedback.id);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:id/:name" element={<Post />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}
export default App;
