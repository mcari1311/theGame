const express = require('express')
require('dotenv').config()

//mongoose
const mongoose = require('mongoose')

const port = process.env.PORT || 3003

const app = express()
//view engine
app.set('view engine', 'jsx') 
app.engine('jsx', require('express-react-views').createEngine())

//import items
const Item = require('./models/items')

//mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//for css
app.use(express.static('public'))

//middleware 
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})
//near the top, around other app.use() calls, view body of post request
app.use(express.urlencoded({extended:false}));

//seed route 
app.get('/items/seed', (req, res)=> {
    Item.create([
        {
            name: 'Keychain' ,
            color: 'yellow' ,
            cost: '2'
        } ,
        {
            name: 'Mini Basketball' ,
            color: 'orange' ,
            cost: '2'
        }
    ], (err, data) => {
        res.redirect('/items')
    }
    )
})



app.get('/', (req, res) => {
    res.send("Hello")
})

//index route 
app.get('/items', (req, res) => {
    // res.render('Index', {items: items})
   Item.find({}, (error, allItems) => {
    res.render('index', {
        items: allItems
    })
   })
})

//new route NEEDS TO BE ABOVE SHOW ROUTE
app.get('/items/new', (req, res) => {
    res.render('New')
})

//post route 
app.post('/items', (req,res) => {
    // //push item data into items array
    // items.push(req.body)
    // // console.log(req.body) 
    // res.redirect('/items')
    Item.create(req.body, (error, createdItem) => {
        res.redirect('/items')
    })
})

//show route 
app.get('/items/:id', (req, res) => {
    Item.findById(req.params.id, (err, foundItem)=> {
        res.render('Show', {
            item: foundItem
        })
    })
})

app.listen(port, function() {
    console.log('Listening on port', port)
})