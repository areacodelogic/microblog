import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteComment(this.props.id);
  }
  render() {
    return (
      <div className="ml-1 mt-2">
        <p>
          <i
            className='fa fa-times text-danger mx-2'
            onClick={this.handleDelete}
          />
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Comment;
