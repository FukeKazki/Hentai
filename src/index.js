import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Home from './components/templates/Home';
// import ViewMovie from './components/templates/ViewMovie';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById('root'));
// ReactDOM.render(<ViewMovie />, document.getElementById('root'));

serviceWorker.unregister();
