const express = require('express');
const app = express();
const path = require('path');

// no idea what this does
app.set('views', path.join(__dirname, ''));

// set ejs as the engine
app.set('view engine', 'ejs');

// for css to work
app.use('/static', express.static(path.join(__dirname, 'static')));

// render compost.ejs 
app.get('/', async (req, res) => {
    try {
        res.render('compost', { });
    } catch (error) {
        console.error('Error rendering template:', error);
        res.status(500).send('Internal Server Error');
    }
});

const port = 3000;
app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`);});