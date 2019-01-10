import React, { Component } from 'react';

const url = 'https://hn.algolia.com/api/v1/search?query=';
const query = 'redux';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { result: null };  
        this.setTopStories = this.setTopStories.bind(this);
    }

    setTopStories(result) {
        this.setState({result});
    }
    componentDidMount() {
        fetch(`${url}${query}`)
        .then(response => response.json())
        .then(result => this.setTopStories(result))
        .catch(error => console.log("fetch error: " + error))
    }
    render(){
        const {result} = this.state;
        if (!this.state.result) { return null; }
        return (
          <div id="content">
            <ul id="post">
                { result.hits.map((item, index) => <li>{(index + 1)}. <a href={item.url}>{item.title}</a></li>) }
            </ul>
          </div>
        )
    }
}

export default Item;