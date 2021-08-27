const express = require('express');

const app = express();

const connectDB = require('./config/db');
connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.port || 5000;

app.use('/', require('./routes/link'));

app.use('/api/NEWurl', require('./routes/url'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
