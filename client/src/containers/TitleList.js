import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getTitlesFromAPI } from '../actions/titles';

import './TitleList.css';

class TitleList extends Component {
  async componentDidMount() {
    if (this.props.titles.length === 0) {
      await this.props.getTitlesFromAPI();
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.props.titles.map((title) => (
            <div key={title.id} className='col-6'>
              <div className='card mb-3'>
                <div className='card-body'>
                  <div className='card-title'>
                    <Link to={'/' + title.id}>{title.title}</Link>
                  </div>
                  <div className='card-text'>
                    <i>{title.description}</i>
                  </div>
                  <div className='card-footer'>{title.votes} votes</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    titles: state.titles,
  };
}

export default connect(mapStateToProps, { getTitlesFromAPI })(TitleList);
