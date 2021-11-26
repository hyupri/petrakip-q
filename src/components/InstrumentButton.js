import React, { useState }  from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

function InstrumentButton() {

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const [count, setCount] = useState(0);
const [link, setLink] = useState("first link");

const isOdd = (num) => {
  return num % 2
};

const [
  type,
  buttonStyle,
  buttonSize] = useState(0);

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

export default InstrumentButton;
