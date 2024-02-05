const styles = {
  card: {
    // maxWidth: 345,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#D9AFD9',
    backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
    padding: '15px',
    borderRadius: '10px',

    '& img': {
      width: '100px',
      height: '100px',
    },

    '& .contact-text': {
      color: '#333',
      fontSize: 18,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1,
    },

    '& button': {
      backgroundColor: '#333',
      color: '#fff',
    },
  },
};

export default styles;
