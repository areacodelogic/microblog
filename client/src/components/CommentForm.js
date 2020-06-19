import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.submitCommentForm(this.state.text)
    
    this.setState({text: ''})
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              onChange={this.handleChange}
              name='text'
              placeholder='New Comment'
              className='form-control'
              value={this.state.text}
              size="50"
            />
          </div>
          <button className='btn btn-dark'>Add</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;