//Import dependencies & modules
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import playersReducer from './reducers/players'
import { setAuthToken, refreshAuthToken } from './actions/auth';

//Add redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create store with multipl reducers
const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        playersData: playersReducer
    }),
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

// Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;