import React, { useState } from 'react';
import FeedbackList from 'components/FeedbackList';
import FeedbackStats from 'components/FeedbackStats';
import Header from 'components/Header';
import FeedbackData from 'data/FeedbackData';

import './styles/index.css';

const INITIAL_STATE = FeedbackData;

const App = () => {
  const [feedback, setFeedback] = useState<IFeedback[]>(INITIAL_STATE);

  const deleteFeedback = (id: number) => {
    setFeedback(feedback.filter(item => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
