const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:5500/eldotech', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Schema and Model
const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

// Routes
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Implement your authentication logic here
    User.findOne({ email, password }, (err, user) => {
        if (err) return res.status(500).send('Error occurred');
        if (!user) return res.status(404).send('User not found');
        return res.status(200).send('Login successful');
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
