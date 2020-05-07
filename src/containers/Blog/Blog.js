import React, { Component } from 'react';

import Posts from '../Posts/Posts';
//import NewPost from '../NewPost/NewPost';
import classes from './Blog.module.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/syncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost')
});

class Blog extends Component {
    state = {
        auth: true
    }

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
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} />: null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found</h1>}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;