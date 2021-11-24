import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Falls Sie Fragen haben oder uns kontaktieren möchten
        </p>
        <p className='footer-subscription-text'>
          können Sie hier ihre E-Mail-adresse hinterlegen
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Abschicken</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Über uns</h2>
            <Link to='/'>PetraKIP Team</Link>
            <a target="_blank" href="https://www.mi.fu-berlin.de/inf/groups/ag-ddi/index.html">FU Berlin DDI</a> 
            <a target="_blank" href="https://www.mi.fu-berlin.de/inf/groups/ag-ki/index.html">FU Berlin KI</a>
            <a target="_blank" href="https://www.spaed.phil.fau.de/lehrstuhl/">FAU Erlangen Nürnberg</a>
          </div>
          <div class='footer-link-items'>
            <h2>Diese Seite</h2>
            <Link to='/contact'>Kontaktieren Sie uns</Link>
            <Link to='/impressum'>Impressum</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Instrumente</h2>
            <Link to='/instrument'>KI Akzeptanz</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PetraKIP
            </Link>
          </div>
          <small class='website-rights'>CERG © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
