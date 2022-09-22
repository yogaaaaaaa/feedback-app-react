import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //STATE FOR FEEDBACK====================================
  const [feedback, setFeedback] = useState([]);

  //STATE FOR EDIT ======================================
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //state for loading =====================
  const [isLoading, setIsLoading] = useState(true);

  //use effect for fetching data
  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetching data =============================
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);

    const data = await response.json();
    setFeedback(data);

    //set isloading to false =======================
    setIsLoading(false);
  };

  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    // newFeedback.id = uuidv4();
    setFeedback([data, ...feedback]);
    // console.log(newFeedback);
    // console.log(newFeedback.id);
  };

  //edit feedback
  const editFeedbackFunc = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((items) =>
        items.id === id ? { ...items, ...updatedItem } : items
      )
    );

    //set mode to give rating, so it's not stuck on edit mode
    setFeedbackEdit({
      edit: false,
      item: {},
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedbackFunc,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
