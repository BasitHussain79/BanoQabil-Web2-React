import { Container } from '@mui/material';
import React from 'react';
import Header from '../../common/Header';

const Layout = ({ showHeader = true, children, maxWidth, customStyle }) => {
  return (
    <>
      {showHeader && <Header />}
      <Container maxWidth={maxWidth || 'lg'} sx={customStyle}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
