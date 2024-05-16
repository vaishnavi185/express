const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'router', 'blogs.js')));

app.listen(6098, () => {
    console.log('Server is running at http://localhost:6098');
});
