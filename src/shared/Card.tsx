import React from 'react';

interface IProps {
  children: React.ReactNode;
  reverse?: boolean;
}

const Card = ({ children, reverse = false }: IProps) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
};

export default Card;
