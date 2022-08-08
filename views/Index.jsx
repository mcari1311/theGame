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
                <div class='container'>
                <ul>
                    {items.map((item, i) => {
                        return (
                            <li>
                                The {' '} <a href={`/items/${i}`}>{item.name}</a> {' '} is {item.color} <br /> It costs {item.cost}
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