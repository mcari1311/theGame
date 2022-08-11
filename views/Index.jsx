// const React = require('react')

// class Index extends React.Component {
//     render() {
//         const { items } = this.props 
//         return (
//             <html>
//                 <head>
//                     <link rel="stylesheet" href="./css/index.css" />
//                     <title>Index</title>
//                 </head>
//                 <body>
//                 <h1> Index Page </h1>
//                 <div className='container'>
//                 <ul>
//                     {items.map((item, i) => {
//                         return (
//                             <li>
//                                 <img src={item.img}></img><br />
//                                  {' '} <a href={`/items/${i}`} class='links'>{item.name}</a> {' '} Color: {item.color} <br />  Cost: {item.cost} tokens
//                             </li>
//                         )
//                     })}
//                 </ul>
//                 </div>
//                 <nav>
//                     <a class = 'makeNew' href="/items/new">Create a New Item</a>
//                 </nav>
//                 </body>
//             </html>
//         )
//     }
// }

// module.exports = Index



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


//Out of Stock function 
// function inStock(count) {
//     if (count == 0) {
//         count = 'Out of Stock'
//     }
// }