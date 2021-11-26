import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InstrumentButton from '../InstrumentButton';

export default function Instrument() {
  return (
  <>
    <Container maxWidth="md">
        <Box sx={{ mtop: '10px', mbottom: '10px', bgcolor: '#174b3b', color: '#fff', border: '1px dashed grey'}}> 
          <InstrumentButton buttonStyle='btn--outline'>Abschicken</InstrumentButton>
        </Box>
      </Container>
    <Footer/>
  </>
  );
}
