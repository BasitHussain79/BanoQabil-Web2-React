import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Users } from 'react-feather';
import { Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Container maxWidth='lg'>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{ background: 'transparent', color: '#fff', gap: 1 }}
              onClick={() => navigate('/')}
              disableRipple={true}
            >
              <Users size={18} />
              <Typography variant='h6' textTransform='none'>
                Contact Manager
              </Typography>
            </Button>
            <ul>
              <li>
                <Link to='/about'>
                  <Typography
                    variant='body1'
                    sx={{
                      color: '#fff',
                      textDecoration: 'none',
                    }}
                  >
                    About
                  </Typography>
                </Link>
              </li>
            </ul>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
