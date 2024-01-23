// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Create SQLite database
const db = new sqlite3.Database('database.db');

// Create a table to store form data
db.run('CREATE TABLE IF NOT EXISTS formData (name TEXT, email TEXT, message TEXT)');

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files (like HTML and CSS)
app.use(express.static('public'));

// API endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Insert form data into the database
    db.run('INSERT INTO formData (name, email, message) VALUES (?, ?, ?)', [name, email, message], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Form submitted successfully!');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
