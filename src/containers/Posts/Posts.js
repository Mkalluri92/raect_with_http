import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import classes from './Posts.module.css';
//import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost'

class Posts extends Component {
    _isMounted = false;

    state = {
        posts: []
    }

    componentDidMount () {
       console.log(this.props);
        this._isMounted = true;
        axios.get('/posts')
        .then( response => {
            if (this._isMounted) {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                return {
                   ...post,
                   author: 'Mounika'}
                })
                this.setState({posts: updatedPosts})
            }
       }).catch (error => {
           console.log(error);
           //this.setState({error: true})
       })
     
   }

   componentWillUnmount () {
       this._isMounted = false;
   }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/'+id});
        //this.setState({selectedPostId: id})
    }

    
    render () {
        let posts = <p style={{textAlign: 'center', backgroundColor: 'red'}}>Something went wrong</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //<Link to={'/posts'+post.id} key={post.id}>
                        <Post key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked ={() => this.postSelectedHandler(post.id)}/>
                    //</Link>
                )
            }) 
        }
        return (
            <div>
                <section className={classes.Posts}>
                  {posts}
                </section>
                 <Route path={this.props.match.url+'/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;