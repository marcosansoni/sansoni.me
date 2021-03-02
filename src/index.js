import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Test from './components/Test';
import Work from './pages/Work';
import Cursor from './components/Cursor';
// import Work from './pages/Work';
// import Cursor from './components/Cursor';
// import TitleBox from './components/TitleBox';
// import TestText from './components/TestText';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Cursor> */}
    {/*  <Work /> */}
    {/* </Cursor> */}
    {/* <TitleBox>CIAO</TitleBox> */}
    {/* <TestText /> */}
    <Cursor>
      <Work />
    </Cursor>
  </React.StrictMode>,
  document.getElementById('root'),
);
