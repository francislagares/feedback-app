import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from 'components/shared/Card';
import { useFeedbackContext } from 'context/FeedbackContext';

interface IProps {
  item: IFeedback;
}

const FeedbackItem = ({ item }: IProps) => {
  const { editFeedback, deleteFeedback } = useFeedbackContext();

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close'>
        <FaTimes onClick={() => deleteFeedback(item.id)} color='purple' />
      </button>
      <button className='edit'>
        <FaEdit color='purple' onClick={() => editFeedback(item)} />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
