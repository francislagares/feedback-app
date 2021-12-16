import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from 'components/shared/Card';

interface IProps {
  item: IFeedback;
  handleDelete: (id: number) => void;
}

const FeedbackItem = ({ item, handleDelete }: IProps) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close'>
        <FaTimes onClick={() => handleDelete(item.id)} color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
