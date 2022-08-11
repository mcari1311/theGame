const express = require('express')
require('dotenv').config()
//for delete
const methodOverride = require('method-override');

//mongoose
const mongoose = require('mongoose')

const port = process.env.PORT || 3003

const app = express()
app.use(methodOverride('_method'));


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
            color: 'Yellow' ,
            cost: '5', 
            img: "https://mmv2api.s3.us-east-2.amazonaws.com/products/images/Pacman_Arcade_Keychain4_LG.jpg" ,
            count: '20' 
        } ,
        {
            name: 'Rubix Cube' ,
            color: 'Rainbow' ,
            cost: '10',
            img: 'https://media.spinmasterstudios.com/images/products/rubiks/us/778988419533/full1.jpg' ,
            count: '12'
        },
        {
            name: 'Small Teddy Bear' ,
            color: 'Brown' ,
            cost: '15',
            img: 'https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwf655653b/26670x.jpg?sw=600&sh=600&sm=fit&q=70' ,
            count: '12'
        },
        {
            name: 'Mini Basketball' ,
            color: 'Orange' ,
            cost: '15',
            img: 'https://ae01.alicdn.com/kf/H4c295a7ec5764fddbb4363b0762082a2d/Brand-new-Hot-6-3cm-Squeeze-Ball-Hand-Exerciser-Orange-Mini-Basketball-Hand-Wrist-Stress-Relief.jpg_Q90.jpg_.webp' ,
            count: '12' 
        },
        {
            name: 'iPhone Case' ,
            color: 'Multi' ,
            cost: '20',
            img: 'https://i5.walmartimages.com/asr/120bb8cf-e91f-49cf-8919-fe3186637383.66c896065a684fc75f25d9e056fb3bce.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' ,
            count: '12' 
        },
        {
            name: 'Board Game' ,
            color: 'Multi' ,
            cost: '50',
            img: 'https://target.scene7.com/is/image/Target/GUEST_789f2908-208f-4f03-8fc7-4cb26296182a?wid=488&hei=488&fmt=pjpeg' ,
            count: '12'
        },
        {
            name: 'Giant Teddy Bear' ,
            color: 'Brown' ,
            cost: '80',
            img: 'https://www.vermontteddybear.com/on/demandware.static/-/Sites-master-catalog-vtb/default/dw56ab5fdc/images/VTB/vtb-22832-6gianthunkalovebear-kbkf72001_detail2_20180418_1448.jpg' ,
            count: '12'
        },
        {
            name: 'iPhone' ,
            color: 'Brown' ,
            cost: '1,000',
            img: 'https://i5.walmartimages.com/asr/570ae65f-0724-498e-a7c7-843fa226ad62.2214a4f891c5477d5b17134f4c1ffcf0.jpeg' ,
            count: '12'   
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


//delete PLACE BELOW SHOW 
app.delete('/items/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, data)=> {
        res.redirect('/items')
    })
    // res.send('deleting')
})

//put route
app.put('/items/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
        res.redirect('/items')
    })
})

//edit route PLACE BELOW DELETE 
app.get('/items/:id/edit', (req, res) => {
    Item.findById(req.params.id, (err, foundItem)=> {
        if(!err) {
            res.render(
                'Edit',
                {
                    item: foundItem
                }
            )
        } else {
            res.send({msg: err.message})
        }
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