const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
const cardRoutes = require('./routes/cardRoutes');
const appRoutes = require('./routes/appRoutes');

const app = express();

// Database connection
mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
app.use('/api/card',cardRoutes);
app.use('/api/app', appRoutes);

app.use(express.static('build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

// Start the server
app.listen(config.server.port, () => {
    console.log(`Server listening on port ${config.server.port}`);
});
