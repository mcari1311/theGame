const React = require('react')

class Index extends React.Component {
    render() {
        const { items } = this.props 
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="./css/index.css" />
                    <title>Index</title>
                </head>
                <body>
                <h1> Index Page </h1>
                <div className='container'>
                <ul>
                    {items.map((item, i) => {
                        return (
                            <li>
                                <img src={item.img}></img><br />
                                 {' '} <a href={`/items/${i}`} class='links'>{item.name}</a> {' '} Color: {item.color} <br />  Cost: {item.cost} tokens
                            </li>
                        )
                    })}
                </ul>
                </div>
                <nav>
                    <a href="/items/new">Create a New Item</a>
                </nav>
                </body>
            </html>
        )
    }
}

module.exports = Index