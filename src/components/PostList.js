import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import './PostList.css';
import UserHeader from './UserHeader';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map( post => {
            return (
                <div className="list-group-item" key={post.id}>
                    <div className="d-flex align-items-center">
                        <i className="material-icons user-icon">person</i>
                        <div className="content">
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
            );
        } );
    }

    render() {
        return <div className="list-group">{this.renderList()}</div>;
    }
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect( mapStateToProps, {fetchPostsAndUsers: fetchPostsAndUsers} )(PostList);    