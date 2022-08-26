

const React = require('react')
class Show extends React.Component {
  
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