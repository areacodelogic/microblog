import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendPostToAPI } from '../actions/posts';
import PostForm from '../components/PostForm';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  add({ title, description, body }) {
    this.props.sendPostToApi(title, description, body)
  }

  cancel() {
    this.propshistory.push('/');
  }
  render() {
    return (
      <div>
        <h1>New Post</h1>
        <PostForm save={this.add} cancel={this.cancel} />
      </div>
    );
  }
}

export default connect(null, { sendPostToAPI })(NewPost);
