import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import NewPost from '../containers/NewPost';
import Post from '../containers/Post'


import './App.css';

const App = () => {
  return (
    <div className='App container'>

      <header className='app-header jumbotron mt-2'>
        <h1 className='App-title display-4'>Microblog</h1>
        <p className='lead'>Get in the Rithm of blogging!</p>
        <nav>
          <NavLink className='btn btn-dark' exact to='/'>
            Blog
          </NavLink>
          <NavLink className='btn btn-secondary' exact to='/new'>
            Add a new post
          </NavLink>
        </nav>
      </header>

      <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/new" render={(props) => <NewPost {...props} />} />
      <Route exact path="/:postId" render={(props) => <Post {...props} />} />
      
      </Switch>

    </div>
  );
};

export default App;
