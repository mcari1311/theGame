const React = require('react')

class Index extends React.Component {
    render() {
        const { items } = this.props 
        return (
            <div>
                <h1> Index Page </h1>
                <ul>
                    {items.map((item, i) => {
                        return (
                            <li>
                                The {' '} <a href={`/items/${i}`}>{item.name}</a> {' '} is {item.color} <br /> It costs {item.cost}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/items/new">Create a New Item</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index