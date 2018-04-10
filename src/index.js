import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';
//import App from './ReduxComponent/app';

ReactDOM.render(
	  <BrowserRouter>
		 <App />
	  </BrowserRouter>
	, document.getElementById('root')
);