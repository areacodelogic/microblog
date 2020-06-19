import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostFromAPI } from '../actions/posts';
import PostDisplay from '../components/PostDisplay';


class Post extends Component {
 

  async componentDidMount() {
    // if (!this.props.post) {
      await this.props.getPostFromAPI(this.props.id);
    
  }

  render() {
     const post = this.props.post;
     if (!post) return <p>Loading</p>;

    return (
      <div className='Post'>
        <PostDisplay  post={post} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let id = props.match.params.postId;

  return {
    id,
    post: state.posts[id],
  };
};

export default connect(mapStateToProps, { getPostFromAPI })(Post);
