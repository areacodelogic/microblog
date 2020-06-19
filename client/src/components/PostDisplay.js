import React, { Component } from 'react';
import './PostDisplay.css';

class PostDisplay extends Component {
 
  render() {
    const { title, description, body, votes } = this.props.post;
    return (
      <div className='PostDisplay card'>
        <div>
          <h2 className='card-header'>{title}</h2>
          <div className='card-body'>
            <p className='py-3'>
              <i>{description}</i>
            </p>
            <div>{body}</div>
          </div>
        </div>

        <div className='PostDisplay-right'>
          <div className='PostDisplay-edit'>
            <i
              className='fas fa-edit text-primary'
              onClick={this.props.toggleEdit}
            />
            <i
              className='fas fa-times text-danger p-3'
              onClick={this.props.delete}
            />
          </div>

          <div className='PostDisplay-votes p-2'>
            <i
              className='fas fa-thumbs-up text-success p-2'
              onClick={() => this.props.doVote('up')}
            />
            <b>{votes} votes</b>
            <i
              className='fas fa-thumbs-down text-danger p-2 '
              onClick={() => this.props.doVote('down')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PostDisplay;
