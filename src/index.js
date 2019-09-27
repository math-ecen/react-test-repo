import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

class Test extends React.Component {
    render(){
        return (
            <img src="https://images-na.ssl-images-amazon.com/images/I/61TswYjYvJL._SX425_.jpg" />
        )
    }
}

ReactDOM.render(<Test />, document.getElementById('root'))

export default function setup() {
    // Add some SEO tags
    var m = document.createElement('meta'); 
    m.name = 'description'; 
    m.content = 'This is the SEO description'; 
    document.head.appendChild(m);

    // Render react beforehand
    ReactDOM.render(<Test />, document.getElementById('root'))
}