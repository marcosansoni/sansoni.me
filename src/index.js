import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import NavigationMenu from './components/NavigationMenu';
import NavigationMenuFullPage from './components/NavigationMenuFullPage';
// import Landing from './Landing';

ReactDOM.render(
  <React.StrictMode>
    {/* <Landing /> */}
    <NavigationMenuFullPage />
  </React.StrictMode>,
  document.getElementById('root'),
);
