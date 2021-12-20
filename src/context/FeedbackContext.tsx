/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from 'data/FeedbackData';

interface IFeedbackContext {
  feedback: IFeedback[];
  feedbackEdit: {
    item: Record<string, any>;
    edit: boolean;
  };
  addFeedback: (args: NewFeedback) => void;
  deleteFeedback: (id: number) => void;
  editFeedback: (item: IFeedback) => void;
  updateFeedback: (id: number, updatedItem: IFeedback) => void;
}

const initialState = FeedbackData;

export const FeedbackContext = createContext<IFeedbackContext>(
  {} as IFeedbackContext,
);

export const FeedbackProvider: React.FC = ({ children }) => {
  const [feedback, setFeedback] = useState(initialState);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback: NewFeedback) => {
    //@ts-ignore
    newFeedback.id = uuidv4();
    //@ts-ignore
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id: number) => {
    setFeedback(feedback.filter(item => item.id !== id));
  };

  const updateFeedback = (id: number, updatedItem: IFeedback) => {
    setFeedback(
      feedback.map(item =>
        item.id === id ? { ...item, ...updatedItem } : item,
      ),
    );
  };

  const editFeedback = (item: IFeedback) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
