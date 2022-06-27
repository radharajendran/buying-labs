import { createStore } from 'redux';
import { searchReducer } from './reducer'

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

export const createReduxStore = () => {
  return createStore(searchReducer, enableReduxDevTools);
}