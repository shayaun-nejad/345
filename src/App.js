import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';
import Helmet from 'react-helmet';
import { imagePath } from './utils/assetUtils';

import * as metadata from './metadata';

import styles from './main.scss';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './components/Home'),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadableAbout = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'about' */ './components/about/About'),
  loading() {
    return <div>Loading...</div>;
  }
});

const App = () => (
  <div className="app">
    <Helmet
      title={metadata.title}
      meta={metadata.meta}
      link={metadata.link}
      script={metadata.script}
      noscript={metadata.noscript}
    />

    <nav id="navigation">
      <img src={imagePath('keyswap.png')} id={styles.images} alt="" />
      <div id="pair">
        <NavLink exact to="/" activeClassName="active" id="links">
          Sell
        </NavLink>
        <NavLink exact to="/about" activeClassName="active" id="links">
          Buy
        </NavLink>
      </div>
      <NavLink exact to="/login" activeClassName="#" id="login">
        Log-in
      </NavLink>
    </nav>

    <div className="main">
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/about" component={LoadableAbout} />
      </Switch>
    </div>

    <footer />
  </div>
);

export default App;
