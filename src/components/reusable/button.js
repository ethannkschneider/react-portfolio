import React from 'react';
import '../../assets/css/button.css';

const pStyle = (textColor) => {
  return {
    color: textColor,
    fontSize: '16px'
  };
};

const divStyle = (background) => {
console.log('background', background);
  return {
    background,
    margin: '5px',
    borderRadius: '5px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    display: 'inline-block',
    cursor: 'pointer',
    padding: '5px'
  };
};

const handleClick = (e, cb) => {
  e.preventDefault();
  cb();
};

const ButtonComponent = ({ background, textColor, text, cb }) => {
  return (
    <div
      className='button'
      style={divStyle(background)}
      onClick={(e) => handleClick(e, cb)}>

      <p
        style={pStyle(textColor)}
        className='button'>
        {text}
      </p>

    </div>
  );
};

export default ButtonComponent;
