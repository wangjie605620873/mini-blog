import React from 'react';
import ReactDOM from 'react-dom';
import './Style/reset.css'
import './Style/index.scss'
import "element-theme-default"
import App from './App';
import * as serviceWorker from './serviceWorker';
import $axios from  './Plugin/axios'
window.$axios = $axios
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
