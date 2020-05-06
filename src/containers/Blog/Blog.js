import React, { Component } from 'react';

import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import classes from './Blog.module.css';
import { Route, NavLink } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Blog extends Component {

    render () {
        
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact 
                                activeClassName="active"
                                activeStyle={{
                                    color: '#fa923f'
                                }}>
                                    Home
                                </NavLink></li>
                            <li><NavLink 
                                to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}
                                activeStyle={{
                                    color: '#fa923f'}}>
                                    New Post
                                </NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <Posts />}  /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;