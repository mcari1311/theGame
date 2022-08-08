const React = require('react') 

class New extends React.Component {
    render() {
        return (
            <div>
                <h1> New Page </h1>
                <form action='/items' method='POST'>
                Name: <input type="text" name="name"/><br/>
                Color: <input type="text" name="color"/><br/>
                Cost: <input type="text" name="cost"/><br/>
                <input type="submit" name="" value="Create Item"/>
                </form>
                    
            </div>
        )
    }
}

module.exports = New
