
const React = require('react');

class Edit extends React.Component {
    render() {
        const { item } = this.props
        return (
            <form action={`/items/${item.id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={item.name} /><br />
                Color: <input type="text" name="color" defaultValue={item.color} /><br />
                Cost: <input type="text" name="cost" defaultValue={item.cost} /><br />
                Count: <input type="text" name="count" defaultValue={item.count} />
                <br />
                <input type="submit" value="Submit Changes" />
            </form>
        )
    }

}
module.exports = Edit;