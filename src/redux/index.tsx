import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import Auth from './auth';
import Language from './language';
import Navigator from './navigation';

const reducers = combineReducers({
	Auth,
	Language,
	Navigator,
})

const store = createStore(
	reducers,
	{},
	compose(
		applyMiddleware(thunk),
	)
);

export default store;