import { createContext, useContext, useEffect, useState } from 'react';

interface IFeedbackContext {
  feedback: IFeedback[];
  feedbackEdit: {
    item: Record<string, any>;
    edit: boolean;
  };
  isLoading: boolean;
  addFeedback: (args: NewFeedback) => void;
  deleteFeedback: (id: number) => void;
  editFeedback: (item: IFeedback) => void;
  updateFeedback: (id: number, updatedItem: IFeedback) => void;
}

export const FeedbackContext = createContext<IFeedbackContext>(
  {} as IFeedbackContext,
);

export const FeedbackProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState<IFeedback[]>([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const addFeedback = async (newFeedback: NewFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id: number) => {
    await fetch(`/feedback/${id}`, { method: 'DELETE' });

    setFeedback(feedback.filter(item => item.id !== id));
  };

  const updateFeedback = async (id: number, updatedItem: IFeedback) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map(item => (item.id === id ? { ...item, ...data } : item)),
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
        isLoading,
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

export const useFeedbackContext = () => {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error(
      'useFeedbackContext must be used within a FeedbackProvider',
    );
  }
  return context;
};
