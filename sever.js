const express = require('express')
require('dotenv').config()

const port = process.env.PORT || 3003

const app = express()
//view engine
app.set('view engine', 'jsx') 
app.engine('jsx', require('express-react-views').createEngine())

//import items
const items = require('./models/items')

//middleware 
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})
//near the top, around other app.use() calls, view body of post request
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send("Hello")
})

//index route 
app.get('/items', (req, res) => {
    res.render('Index', {items: items})
})

//new route NEEDS TO BE ABOVE SHOW ROUTE
app.get('/items/new', (req, res) => {
    res.render('New')
})

//post route 
app.post('/items', (req,res) => {
    //push item data into items array
    items.push(req.body)
    // console.log(req.body) 
    res.redirect('/items')
})

//show route 
app.get('/items/:indexOfItemsArray', (req, res) => {
    res.render('Show', {
        item: items[req.params.indexOfItemsArray]
    })
})


app.listen(port, function() {
    console.log('Listening on port', port)
})