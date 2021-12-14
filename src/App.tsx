import React, { useState } from 'react';
import FeedbackList from 'components/FeedbackList';
import Header from 'components/Header';
import FeedbackData from 'data/FeedbackData';

import './styles/index.css';

const INITIAL_STATE = FeedbackData;

const App = () => {
  const [feedback, setFeedback] = useState<IFeedback[]>(INITIAL_STATE);

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
