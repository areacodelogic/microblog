import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getTitles } from '../actions/titles';
import PropTypes from 'prop-types';
import "./TitleList.css"

const TitleList = ({ getTitles, posts: { titles } }) => {
  useEffect(() => {
    getTitles();
  }, [getTitles]);

  console.log(titles)
  return (
    <div className='row'>
      {titles.map((title) => (
        <div key={title.id} className='col'>
          <div className='card'>
            <div className='card-body'>
              <div className='card-title'>
                <Link to={'/' + title.id}>{title.title}</Link>
              </div>
              <div className="card-text">{title.description}</div>
              <div className="card-footer"><small>{title.votes} votes</small></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

TitleList.propTypes = {
  getTitles: PropTypes.func.isRequired,
  titles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.titles,
});

export default connect(mapStateToProps, { getTitles })(TitleList);
