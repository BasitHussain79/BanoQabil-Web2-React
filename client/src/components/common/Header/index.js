import React from 'react';
import { Box, Typography } from '@mui/material';
import bg from '../../../assets/img/bg.jpg';

const Header = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${bg}) no-repeat center center/cover`,
        height: '35vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <Typography variant='h1' fontSize={32} fontWeight={500}>
        Manager your contacts in a best way
      </Typography>
    </Box>
  );
};

export default Header;
