import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import Layout from '../../ui/Layout';

const ContactFrom = () => {
  const [formData, setFromData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    relation: 'personal',
  });

  //   const [count, setCount] = useState(0);

  //   const incrementHandler = () => {
  //     setCount((prevState) => prevState + 1);
  //     setCount((prevState) => prevState + 1);
  //     setCount((prevState) => prevState + 1);
  //   };
  //   const decrementHandler = () => setCount(count - 1);

  const inputChangeHandler = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Layout customStyle={{ my: 10 }}>
      <Box component='form'>
        <Typography variant='h3' mb={3}>
          Add Contact
        </Typography>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <TextField
              id='fname'
              label='First Name'
              variant='outlined'
              value={formData.fname}
              name='fname'
              onChange={inputChangeHandler}
              fullWidth
              required
            />
          </Grid>
          <Grid item sm={6} xs={6}>
            <TextField
              id='lname'
              label='Last Name'
              variant='outlined'
              value={formData.lname}
              name='lname'
              onChange={inputChangeHandler}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='email'
              label='Email'
              variant='outlined'
              value={formData.email}
              name='email'
              onChange={inputChangeHandler}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='phone'
              label='Phone'
              variant='outlined'
              value={formData.phone}
              name='phone'
              onChange={inputChangeHandler}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id='relation'>Relation</FormLabel>
              <RadioGroup
                value={formData.relation}
                onChange={inputChangeHandler}
                name='relation'
              >
                <FormControlLabel
                  value='personal'
                  control={<Radio />}
                  label='Personal'
                />
                <FormControlLabel
                  value='professional'
                  control={<Radio />}
                  label='Professional'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' sx={{ width: '100%' }}>
              Add Contact
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* <Box>
        <button onClick={incrementHandler}>+</button>
        <p>{count}</p>
        <button onClick={decrementHandler}>-</button>
      </Box> */}
    </Layout>
  );
};

export default ContactFrom;
