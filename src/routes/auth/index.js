const MainAuthRouter = require('express').Router()


// You can put all of your methods under a single .route like this: (instead of separating them like the below route methods)
MainAuthRouter.route('/register')
    .get((req,res) => {
    res.render('register')
    })
    .post((req,res) => {
        res.send('Post Main Auth Router')
    })
//     .put('/', (req,res) => {
//         res.send('Put Main Auth Router')
//     })


// MainAuthRouter.get('/', (req,res) => {
//     res.send('Main Auth Router')
// })

// MainAuthRouter.post('/', (req,res) => {
//     res.send('Post Main Auth Router')
// })

// MainAuthRouter.put('/', (req,res) => {
//     res.send('Put Main Auth Router')
// })

// this makes it so we can put require('Express').Router() into other files and (ultimately goes back to run the the Express function) Makes it a part of the app. 
module.exports = MainAuthRouter