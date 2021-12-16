import React from 'react';

interface IProps {
  children: React.ReactNode;
  version?: string;
  type?: ButtonType;
  isDisabled?: boolean;
}

const Button = ({
  children,
  version = 'primary',
  type = 'button',
  isDisabled = false,
}: IProps) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
