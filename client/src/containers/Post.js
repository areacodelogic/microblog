import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPostFromAPI,
  removePostFromAPI,
  updatePostInAPI,
  sendVoteToAPI,
  sendCommentToAPI
} from '../actions/posts';
import PostDisplay from '../components/PostDisplay';
import PostForm from '../components/PostForm';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };

    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.vote = this.vote.bind(this);
    this.addComment = this.addComment.bind(this);
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

  vote(direction){
    this.props.sendVoteToAPI(this.props.post.id, direction)
  }

  addComment(text){
    this.props.sendCommentToAPI(this.props.post.id, text)
  }

  render() {
    const post = this.props.post;
    if (!post) return <p>Loading</p>;

    return (
      <div className='Post'>
        {this.state.isEditing ? (
          <PostForm post={post} save={this.edit} cancel={this.toggleEdit} />
        ) : (
          <PostDisplay post={post} delete={this.delete} toggleEdit={this.toggleEdit} doVote={this.vote}/>
        )}

        <section className="Post-comments">
        <h4>Comments</h4>
        <CommentList comments={post.comments} />
        <CommentForm submitCommentForm={this.addComment} />
        </section>
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
  sendVoteToAPI,
  sendCommentToAPI
})(Post);
