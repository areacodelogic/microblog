import React, {Component} from 'react';
import Comment from '../components/Comment';

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  };

  render() {
    const { comments } = this.props;
    return comments.map((comment) => (
      <div>
        <Comment
          key={comment.id}
          id={comment.id}
          text={comment.text}
          deleteComment={this.props.deleteComment}
        />
      </div>
    ));
  }
}

export default CommentList