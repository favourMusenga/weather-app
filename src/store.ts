import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { settingReducer } from './reducers/settingReducer';

export const store = createStore(
  settingReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
