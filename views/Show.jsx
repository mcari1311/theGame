const React = require('react') 

class Show extends React.Component {
    render () {
        const item = this.props.item
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/index2.css" />
                    <title>Index</title>
                </head>
                <body>
                <div class='container'>
                <h1> Show page </h1>
                <img src={item.img} class='img'></img><br />
                <p class='title'>  {item.name} </p> 
                <p> <br /> Color: {item.color} <br /> Cost: {item.cost} tokens </p>
                </div>
                </body>
            </html>
        )
    }
}

module.exports = Show