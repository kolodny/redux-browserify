import assert from 'assert';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  if (action.type === 'INC') return state + 1;
  return state;
}

const store = createStore(reducer);

assert.equal(store.getState(), 0);

store.dispatch({type: 'INC'});

assert.equal(store.getState(), 1);

if (global.document) {
  document.write('My number is ' + store.getState());
}
