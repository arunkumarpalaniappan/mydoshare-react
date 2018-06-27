import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/index.scss';
import App from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
