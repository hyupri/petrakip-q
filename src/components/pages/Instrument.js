import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Box from '@mui/material/Box';
import {InstrumentButton} from '../InstrumentButton';

export default function Instrument() {
  return (
  <>
    <div className='footer-container'>
      <Box sx={{ mtop: '10px', mbottom: '10px', bgcolor: '#174b3b', color: '#fff'}}> 
        <InstrumentButton buttonStyle='btn--outline'>Abschicken</InstrumentButton>
      </Box>
    </div>
    <Footer/>
  </>
  );
}
