import React from 'react';
import TitleList from '../containers/TitleList';

const Home = () => {
  return (
    <div>
      <div>
        <p>
          Welcome to <b>Microblog</b>, our innovative site for communicating on
          the information superhighway.
        </p>
      </div>
      <TitleList />
    </div>
  );
};

export default Home;
