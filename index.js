const express = require('express');
const request = require('request-promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const apiKey = process.env.API_KEY;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API.')
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});