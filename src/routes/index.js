
module.exports = function(app){
    app.use('/auth', require('./auth'))
}
// require('./auth'). that is the main auth router. "when we go to /auth use this router"

// create a function that is going to set up all of our routes:
