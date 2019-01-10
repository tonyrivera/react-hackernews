import React, { Component } from 'react';

class Nav extends Component {
    render(){
        return(
            <nav>
                <img src="https://news.ycombinator.com/y18.gif" class="logo" />
                <ul>
                    <li><strong><a href="https://news.ycombinator.com/news">Hacker News</a></strong></li>
                    <li>new</li>
                    <li>comments</li>
                    <li>show</li>
                    <li>ask</li>
                    <li>jobs</li>
                    <li>submit</li>
                    <li id="login">login</li>
                </ul>
            </nav>
        )
    }
}

export default Nav;