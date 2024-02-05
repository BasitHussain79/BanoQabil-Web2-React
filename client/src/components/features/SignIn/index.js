import React from 'react';
import Layout from '../../ui/Layout';

const SignIn = () => {
  return (
    <Layout
      customStyle={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
        </div>
      </form>
    </Layout>
  );
};

export default SignIn;
