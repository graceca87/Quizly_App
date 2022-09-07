const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello World')
});

// Before we initialize routes set up our settings:
// Set the view engine to ejs (don't forget to npm install ejs)
app.set('view engine', 'ejs')
// Update the location of the views folder that res.render uses:
app.set('views', path.join(__dirname, 'src/templates/views'))

// Initialize routes: Create function initRoutes that brings in routes from our src files
// initRoutes is equal to the exports of the routes modules
const initRoutes = require('./src/routes')
// call the initRoutes function. Takes in app. Looks at path above ('./src/routes')
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
})

