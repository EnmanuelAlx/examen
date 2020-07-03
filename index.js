


const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const weatherRoutes = require('./routes/weatherRoutes')
const dotenv = require('dotenv');
dotenv.config();

app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}.`);});

