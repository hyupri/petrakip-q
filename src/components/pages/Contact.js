
import React from 'react';
import '../../App.css';
import { Button } from '../Button';

function Contact() {
    return (
        <>   
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
            </div>
        </>
    );
}

export default Contact;