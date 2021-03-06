import React from 'react';
import GlobalStyles from './GlobalStyles';

import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom";

import { client } from './sevices/client';
import { ApolloProvider } from "@apollo/client";
import { CurrentUserProvider } from './sevices/hooks/user_auth';

import Navbar from './components/navbar';
import { BiMoviePlay } from 'react-icons/bi'

const App: React.FC = () => {

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/all-movies' },
    { name: 'My Reviews', path: '/my-reviews' }
  ];

  return (
    <ApolloProvider client={client}>
      <CurrentUserProvider>
        <Router>
          <Navbar items={navItems} title="Coolmovies" Icon={BiMoviePlay} />
          <Routes />
        </Router>
      </CurrentUserProvider>
      <GlobalStyles />
    </ApolloProvider>
  );
}

export default App;
