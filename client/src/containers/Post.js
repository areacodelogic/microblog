import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostFromAPI, removePostFromAPI } from '../actions/posts';
import PostDisplay from '../components/PostDisplay';


class Post extends Component {
  constructor(props){
    super(props)
    
    this.delete = this.delete.bind(this);
  }
 

  async componentDidMount() {
    if (!this.props.post) {
      await this.props.getPostFromAPI(this.props.id);
    }
    
  }

  delete(){
    this.props.removePostFromAPI(this.props.post.id);
    this.props.history.push('/')
  }

  render() {
     const post = this.props.post;
     if (!post) return <p>Loading</p>;

    return (
      <div className='Post'>
        <PostDisplay  post={post} delete={this.delete}/>
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

export default connect(mapStateToProps, { getPostFromAPI, removePostFromAPI })(Post);
