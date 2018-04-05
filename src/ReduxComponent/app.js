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

let state = [];

const store = createStore(reducer, state, applyMiddleware(thunkMiddleware));

store.dispatch(actions.fetchAll());

const App = () => (
    <Provider store={store}>
        <ReviewSelector />
    </Provider>
);
export default App;