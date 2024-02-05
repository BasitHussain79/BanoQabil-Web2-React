import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Container maxWidth='lg' sx={{ mt: 6 }}>
      <Typography variant='h3' component='div' mb={3}>
        About Contact Manager App
      </Typography>

      <Typography variant='body1' align='justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, modi. Amet
        debitis, provident nihil ad iusto quas quibusdam nemo libero aut maxime?
        Fugiat accusantium, possimus ipsa natus maxime eum unde nesciunt, quae
        similique id officia? Obcaecati deleniti quia voluptatibus maiores,
        eveniet eius et iusto alias natus voluptatum quaerat at saepe recusandae
        esse unde mollitia minima atque labore fugit nulla! Nemo pariatur soluta
        nesciunt facilis esse accusantium ea veniam ipsam enim perferendis,
        perspiciatis fuga voluptates quae. Sint quasi pariatur nemo itaque porro
        nobis quos quam, saepe deleniti minima et velit. Modi magni sit, eum
        placeat ab vitae voluptate facilis illum ipsa.
      </Typography>
    </Container>
  );
};

export default About;
