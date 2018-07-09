import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './containers/App';
import 'tachyons'
import "./index.css";
import { searchRobots, requestsRobots } from './reducers/reducers';

const middlewares = [];
if (process.env.NODE_ENV === `development`) {
	const logger = createLogger();
	middlewares.push(thunkMiddleware, logger)
}else{
	middlewares.push(thunkMiddleware)
}

const rootReducers = combineReducers({ searchRobots, requestsRobots })
const store = createStore(rootReducers, applyMiddleware(...middlewares))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

registerServiceWorker();
