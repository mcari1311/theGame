const React = require('react') 

class Show extends React.Component {
    render () {
        const item = this.props.item
        return (
            <div>
            <h1> Show page </h1>
            <p> The {item.name} is {item.color}. It costs {item.cost} tokens </p>
            </div>
        )
    }
}

module.exports = Show