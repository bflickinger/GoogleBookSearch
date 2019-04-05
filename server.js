const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets for Prod
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Express API Routes
app.use(routes);

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`API Server now on port: ${PORT}`)
});