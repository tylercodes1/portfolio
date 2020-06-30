import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Widgets/General/App';
import * as serviceWorker from './serviceWorker';


import App2 from './Widgets/General/App2'
import Test from './Widgets/Test/Test'

ReactDOM.render(
  // <App />,
  <App2 />,
  // <Test />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
