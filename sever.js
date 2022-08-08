const express = require('express')
require('dotenv').config()

const port = process.env.PORT || 3003

const app = express()
//view engine
app.set('view engine', 'jsx') 
app.engine('jsx', require('express-react-views').createEngine())

//import items
const items = require('./models/items')

app.get('/', (req, res) => {
    res.send("Hello")
})

//index route 
app.get('/items', (req, res) => {
    res.render('Index', {items: items})
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