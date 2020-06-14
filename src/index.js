import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './tateti'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Game />,
  document.getElementById('root')
);

serviceWorker.unregister();
