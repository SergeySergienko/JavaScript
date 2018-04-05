import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';
//import App from './React_Redux_App/app';
//import App from './Redux_App/app';

ReactDOM.render(
	  <BrowserRouter>
		<App />
	  </BrowserRouter>
	, document.getElementById('root')
);