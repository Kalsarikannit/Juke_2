import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Albums from './components/Albums';
import Album from './components/Album';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <Route path='/albums' component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <IndexRedirect to="/albums" />
    </Route>
  </Router>,
  document.getElementById('app')
);


// export default BillMurray = () => <img src="http://fillmurray.com/100/100" />
//
// import { Router, Route, hashHistory } from 'react-router';
// import BillMurray from './BillMurray';
//
// ReactDOM.render(
// <div>
//   <h3>FooBar</h3>
//   <Router history={hashHistory}>
//     <Route path="/hello" component={BillMurray} />
//   </Router>
//   <p>This paragraph contains words, but you knew that already.</p>
// </div>,
// document.getElementById('app')
// )
