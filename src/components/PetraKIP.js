import React from 'react';
import '../App.css';
import { Button } from './Button';
import './PetraKIP.css';

function PetraKIP() {
  return (
    <div className='pk-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Persönliches transparentes KI-basiertes Portfolio für die LehrerInnenbildung (PetraKIP)</h1>
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
