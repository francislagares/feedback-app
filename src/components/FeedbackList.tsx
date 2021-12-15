import React from 'react';
import FeedbackItem from './FeedbackItem';

interface IProps {
  feedback: IFeedback[];
  handleDelete: (id: number) => void;
}

const FeedbackList = ({ feedback, handleDelete }: IProps): JSX.Element => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map(item => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
