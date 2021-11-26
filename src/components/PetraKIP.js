import React from 'react';
import '../App.css';
import { Button } from './Button';
import './PetraKIP.css';

function PetraKIP() {

  return (
    <div className='pk-container'>
      <video src='/petrakip-q/videos/video-1.mp4' autoPlay loop muted />
      <p>
      <h2>Persönliches transparentes</h2> 
      <h1>KI-basiertes Portfolio für die LehrerInnenbildung</h1>
      <h1>&gt;PetraKIP&lt;</h1>
      </p>
      <div className='pk-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Mehr erfahren
        </Button>
      </div>
    </div>
  );
}

export default PetraKIP;
