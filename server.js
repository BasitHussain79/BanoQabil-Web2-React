const express = require('express');
require('dotenv').config();
const connectDB = require('./db');

const app = express();

app.use(express.json({ extended: false }));

// connect db
connectDB();

// routes
app.use('/api/v1/users/', require('./routes/users'));
app.use('/api/v1/auth/', require('./routes/auth'));
app.use('/api/v1/contacts/', require('./routes/contacts'));

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is runing ${PORT}`));
