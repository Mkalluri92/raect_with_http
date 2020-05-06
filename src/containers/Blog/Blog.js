import React, { Component } from 'react';

import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import classes from './Blog.module.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Blog extends Component {

    render () {
        
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact 
                                activeClassName="active"
                                activeStyle={{
                                    color: '#fa923f'
                                }}>
                                    Posts
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
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;