const express = require('express')
require('dotenv').config()

const port = process.env.PORT || 3003

const app = express()
//view engine
app.set('view engine', 'jsx') 
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
    res.send("Hello")
})


app.listen(port, function() {
    console.log('Listening on port', port)
})