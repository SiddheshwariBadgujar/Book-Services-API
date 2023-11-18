
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect 
mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());


const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
