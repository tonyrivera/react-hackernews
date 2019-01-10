import React, { Component } from 'react';

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
        fetch('http://hn.algolia.com/api/v1/search?query=redux')
        .then(response => response.json())
        .then(result => this.setTopStories(result))
        .catch(error => console.log("fetch error" + error))
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