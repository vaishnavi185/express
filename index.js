const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'router', 'blogs.js')));

app.listen(6026, () => {
    console.log('Server is running at http://localhost:6026');
});
