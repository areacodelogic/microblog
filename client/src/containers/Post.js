import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPostFromAPI,
  removePostFromAPI,
  updatePostInAPI,
} from '../actions/posts';
import PostDisplay from '../components/PostDisplay';
import PostForm from '../components/PostForm';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };

    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  async componentDidMount() {
    if (!this.props.post) {
      await this.props.getPostFromAPI(this.props.id);
    }
  }

  toggleEdit() {
    this.setState((st) => ({
      isEditing: !st.isEditing,
    }));
  }

  edit({ title, description, body }) {
    this.props.updatePostInAPI(this.props.post.id, title, description, body);

    this.toggleEdit();
  }

  delete() {
    this.props.removePostFromAPI(this.props.post.id);
    
    this.props.history.push('/');
  }

  render() {
    const post = this.props.post;
    if (!post) return <p>Loading</p>;

    return (
      <div className='Post'>
        {this.state.isEditing ? (
          <PostForm post={post} save={this.edit} cancel={this.toggleEdit} />
        ) : (
          <PostDisplay post={post} delete={this.delete} toggleEdit={this.toggleEdit}/>
        )}
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

export default connect(mapStateToProps, {
  getPostFromAPI,
  removePostFromAPI,
  updatePostInAPI,
})(Post);
