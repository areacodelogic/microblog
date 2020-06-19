import React, { Component } from 'react';
import './PostDisplay.css';

class PostDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, body, votes } = this.props.post;
    return (
      <div className='PostDisplay'>
        <div>
          <h2>{title}</h2>
          <p>
            <i>{description}</i>
          </p>
          <div>{body}</div>
        </div>

        <div className='PostDisplay-right'>
          <div>
            <i className='fas fa-times text-danger' onClick={this.props.delete} />
          </div>
          <div>
            <b>{votes} votes:</b>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDisplay;
