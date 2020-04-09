const express = require('express');
const path = require('path');
const cors= require('cors');
const httpHandler = require('./src/HTTPHandler');
const app = express();
const PORT = 3002;

// middleware == true
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/countries',httpHandler.getAllCountries);
app.get('/cities/:country',httpHandler.getAllCitiesByCountryName);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));