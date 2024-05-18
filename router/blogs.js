const express = require('express');
const router = express.Router();
const path = require('path');
const blog = require('../data/blog');

router.get('/home', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'));
    res.render('home')
});

router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/blogHome.html'));
});

router.get('/blogPage/:slug', (req, res) => {
    
    const myBlog = blogs.filter((e) => {
        return e.slug === req.params.slug;
        
    });
    console.log(myBlog);
    res.sendFile(path.join(__dirname, '../templates/blogPage.html'));
});

// Uncomment the following routes if you intend to use them
// router.get('/blogHome', (req, res) => {
//     res.sendFile(path.join(__dirname, '../templates/blogHome.html'));
// });

router.get('/blogPage', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/blogPage.html'));
});

module.exports = router;
