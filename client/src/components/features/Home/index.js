import React from 'react';
import Layout from '../../ui/Layout';
import { Box, Grid, TextField } from '@mui/material';
import Contact from './Contact';

const Home = () => {
  return (
    <Layout customStyle={{ my: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            id='search-contacts'
            label='Search'
            variant='outlined'
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent='space-between' spacing={4}>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
