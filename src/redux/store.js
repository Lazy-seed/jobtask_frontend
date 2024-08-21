import { createStore, applyMiddleware, combineReducers, compose  } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import { jobReducer } from './jobs/jobReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  jobs: jobReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
