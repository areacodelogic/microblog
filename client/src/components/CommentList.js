import React, {Component} from 'react';
import Comment from '../components/Comment';

class CommentList extends Component {
  
  render() {
    console.log(this.props);
    const { comments } = this.props;
    return comments.map((comment) => (
      <Comment key={comment.id} id={comment.id} text={comment.text} />
    ));
  }
}

export default CommentList