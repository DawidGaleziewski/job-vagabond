
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/jobs.route'); // Imports routes for the products
const app = express();

// http://localhost:3000/jobs/test route working fine
app.use('/jobs', product);

let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});