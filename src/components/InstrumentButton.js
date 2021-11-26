import React, { useState }  from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];


export const InstrumentButton = ({
      children,
      type,
      onClick,
      buttonStyle,
      buttonSize
    }) => {

  const [count, setCount] = useState(0);
  const [link, setLink] = useState("first link");

  const isOdd = (num) => {
    return num % 2
  };

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const showLink = () => {
    setCount(count + 1)
      if(isOdd(count)){
        setLink("fist link");
      }else{
        setLink("second link");
      }
    }

  return (
    <Link to='/petrakip-q/instrument' className='btn-mobile'>
      <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => showLink()}
        type={type}
      >
        {link}
      </button>
    </Link>
  );
}
