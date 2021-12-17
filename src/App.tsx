/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackForm from 'components/FeedbackForm';
import FeedbackList from 'components/FeedbackList';
import FeedbackStats from 'components/FeedbackStats';
import Header from 'components/Header';
import FeedbackData from 'data/FeedbackData';

import './styles/index.css';

const INITIAL_STATE = FeedbackData;

const App = () => {
  const [feedback, setFeedback] = useState<IFeedback[]>(INITIAL_STATE);

  const addFeedback = (newFeedback: NewFeedback) => {
    //@ts-ignore
    newFeedback.id = uuidv4();
    //@ts-ignore
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id: number) => {
    setFeedback(feedback.filter(item => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
