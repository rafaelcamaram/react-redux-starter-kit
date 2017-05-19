/* Dependencies */
import { createStore } from 'redux';

/* Reducers */
import rootReducer from './reducers';

export default (initialState) => createStore(rootReducer, initialState);
