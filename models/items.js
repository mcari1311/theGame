// const items = [
//     {
//         name: 'Keychain' ,
//         img: 'https://mmv2api.s3.us-east-2.amazonaws.com/products/images/Pacman_Arcade_Keychain4_LG.jpg' ,
//         color: 'Pink' ,
//         cost: 5
//     },
//     {
//         name: 'Rubix Cube' ,
//         img: 'https://media.spinmasterstudios.com/images/products/rubiks/us/778988419533/full1.jpg',
//         color: 'Rainbow' , 
//         cost: 10
//     }, 
//     {
//         name: 'Small Teddy Bear', 
//         img: 'https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwf655653b/26670x.jpg?sw=600&sh=600&sm=fit&q=70',
//         color: 'Brown',
//         cost: 15
//     },
//     {
//         name: 'Mini Basketball',
//         img: 'https://ae01.alicdn.com/kf/H4c295a7ec5764fddbb4363b0762082a2d/Brand-new-Hot-6-3cm-Squeeze-Ball-Hand-Exerciser-Orange-Mini-Basketball-Hand-Wrist-Stress-Relief.jpg_Q90.jpg_.webp' ,
//         color: 'Orange',
//         cost: 15
//     },
//     {
//         name: 'iPhone case',        
//         img: 'https://i5.walmartimages.com/asr/120bb8cf-e91f-49cf-8919-fe3186637383.66c896065a684fc75f25d9e056fb3bce.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
//         color: 'Blue',
//         cost: 20
//     },
//     {
//         name: 'Board Game',
//         img:'https://target.scene7.com/is/image/Target/GUEST_789f2908-208f-4f03-8fc7-4cb26296182a?wid=488&hei=488&fmt=pjpeg' ,
//         color: 'Multi-colored',
//         cost: 50
//     },
//     {
//         name: 'Giant Teddy Bear',
//         img: 'https://www.vermontteddybear.com/on/demandware.static/-/Sites-master-catalog-vtb/default/dw56ab5fdc/images/VTB/vtb-22832-6gianthunkalovebear-kbkf72001_detail2_20180418_1448.jpg',
//         color: 'Brown',
//         cost: 80
//     },
//     {
//         name: 'iPhone',
//         img: 'https://i5.walmartimages.com/asr/570ae65f-0724-498e-a7c7-843fa226ad62.2214a4f891c5477d5b17134f4c1ffcf0.jpeg' ,
//         color: 'White',
//         cost: 300
//     }

// ]

// module.exports = items

const mongoose= require('mongoose')

const itemSchema = new mongoose.Schema ({
    name: { type: String, required: true} ,
    color: { type: String, required: true} ,
    cost: { type: String, required: true} ,
    img: { type: String} , 
    count: { type: Number, required: true}

})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item 