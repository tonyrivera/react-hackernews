import React, { Component } from 'react';
import Nav from './Nav';
import Item from './Item';

class App extends Component {
    render(){
        return(
            <div>
                <Nav />
                <Item />
            </div>
        )
    }
}

export default App;