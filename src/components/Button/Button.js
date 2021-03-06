import React from 'react';
import './Button.scss';

const Button = props => {
  const { disabled, title, type, onClick } = props;
  const titleRender = disabled ? 'Indisponível' : title;
  const typeRender = disabled ? 'disabled' : type;
  return (
    <button
      className={`button button--${typeRender}`}
      disabled={disabled}
      onClick={onClick}
    >
      {titleRender}
    </button>
  );
};
export default Button;
