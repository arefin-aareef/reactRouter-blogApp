import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import Missing from './Missing';
import PostPage from './PostPage';
import About from './About';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
       <Header />
       <Nav />
       <Home />
       <NewPost />
       <PostPage />
       <About />
       <Missing />
       <Footer />

    </div>
  );
}

export default App;
