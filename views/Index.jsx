const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <html> 
        <div> 
            <head>
            <link rel="stylesheet" href="./css/index.css" />
            <h1> Items Index Page </h1>
            </head>
            <body> 
            <ul>
                {
                   this.props.items.map((item, i) => {
                    return (
                        <li>
                        <img src= {item.img}></img>
                         <a class ='name' href={`/items/${item.id}`}> { item.name } </a>
                        <form action={`/items/${item._id}?_method=DELETE`} method="POST"><button type="submit">Delete</button></form>
                        <a href={`/items/${item._id}/edit`}>Edit This Item</a>
                        </li>
                        )
                    })
                }
            </ul>
            <nav>
            <a href="/items/new">Create a New Item</a>
            </nav>
            </body>
        </div>
        </html>
    )
  }
}

module.exports = Index;
