import React from 'react';

interface IProps {
  item: IFeedback;
}

const FeedbackItem = ({ item }: IProps) => {
  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
  );
};

export default FeedbackItem;
