const express = require('express');
const path = require('path');
const app = express();

var expbh = require('express-handlebars')
app.engine('handlebars', engine());

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'router', 'blogs.js')));

app.listen(6096, () => {
    console.log('Server is running at http://localhost:6096');
});
