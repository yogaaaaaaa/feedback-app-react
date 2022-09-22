import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //STATE FOR FEEDBACK====================================
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from Feedback Context",
      rating: 8,
    },
    {
      id: 2,
      text: "This is from Feedback Context 2 Mollit veniam labore proident duis consequat fugiat consectetur consequat occaecat eu ex excepteur nisi.",
      rating: 10,
    },
    {
      id: 3,
      text: "This is from Feedback Context Labore nisi occaecat ipsum commodo id elit nisi magna nulla dolore.Enim sunt deserunt do laboris do in.Ut commodo dolor sit ea quis ut aute.",
      rating: 5.5,
    },
  ]);

  //STATE FOR EDIT ======================================
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
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
      item:{}
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
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
