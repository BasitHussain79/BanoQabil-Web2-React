import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './style';
import { Mail, Phone } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <Card sx={styles.card}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image='https://cdn-icons-png.flaticon.com/512/21/21104.png'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          align='center'
          fontWeight={500}
        >
          Lizard
        </Typography>
        <Typography variant='body2' className='contact-text' mb={2}>
          <Mail size={28} /> basit@gmail.com
        </Typography>
        <Typography variant='body2' className='contact-text'>
          <Phone size={28} /> +92 333 333 3333
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='medium' variant='contained'>
          Edit
        </Button>
        <Button
          size='medium'
          variant='contained'
          onClick={() => navigate('/contact/123')}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default Contact;
