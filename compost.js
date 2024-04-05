//compost.js
const express = require('express');
const app = express();
const path = require('path');

// Set the views directory
app.set('views', path.join(__dirname, ''));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'static' directory
app.use('/static', express.static(path.join(__dirname, 'static')));

// Render compost.ejs
app.get('/', async (req, res) => {
    try {
        res.render('compost', {});
    } catch (error) {
        console.error('Error rendering template:', error);
        res.status(500).send('Internal Server Error');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
