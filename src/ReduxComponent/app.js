/**
 * Created by Сергей on 01.04.2018.
 */
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {ReviewSelector}  from './selector';
import {reducer} from './reducer';
import * as actions from './actions';
//import 'babel-polyfill';
import thunkMiddleware from 'redux-thunk';

function logger(store, action) {
	store.dispatch(action);
	console.log('New state ', store.getState());
}

let state = [];
let photosAmount = 3;
const store = createStore(reducer, state, applyMiddleware(thunkMiddleware));
logger(store, actions.fetchAll(photosAmount));

const App = () => (
    <Provider store={store}>
        <ReviewSelector />
    </Provider>
);
export default App;