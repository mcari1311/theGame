// const React = require('react') 

// class Show extends React.Component {
//     render () {
//         const item = this.props.item
//         return (
//             <html>
//                 <head>
//                     <link rel="stylesheet" href="/css/index2.css" />
//                     <title>Index</title>
//                 </head>
//                 <body>
//                 <div class='container'>
//                 <h1> Show page </h1>
//                 <img src={item.img} class='img'></img><br />
//                 <p class='title'>  {item.name} </p> 
//                 <p> <br /> Color: {item.color} <br /> Cost: {item.cost} tokens </p> <br />
//                 <button class='buy'> BUY WITH TOKENS </button>

//                 </div>
//                 </body>
//             </html>
//         )
//     }
// }

// module.exports = Show

const React = require('react')
class Show extends React.Component {
    //javascript: 
  
    myFunction(stock) {
        return stock -= 1
    }
    
       
    render(){
        const stock = this.props.item.count
        return (
            <html> 
                <head>
                <link rel="stylesheet" href="/css/index2.css" />
                </head>
                <body> 
            <div class ="itemDis">
                <h1>Items show page</h1>
                <img class ="img" src= {this.props.item.img}></img>
               <div class='title'>{ this.props.item.name } </div> <br /> 
               <p> color: {this.props.item.color}<br />
               cost: {this.props.item.cost} tokens <br />                 
               stock: {this.props.item.count} </p> <br /><br /> 
               <button onClick={this.myFunction(this.props.item.count)}>BUY!</button>  
               
            </div>
            </body>
            </html>
        )
    }
}

module.exports = Show 