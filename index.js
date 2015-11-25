var assert = require('assert');
var redux = require('redux');
var createStore = redux.createStore;

var reducer = function(state, action) {
  if (!state) state = 0;
  if (action.type === 'INC') return state + 1;
  return state;
}

var store = createStore(reducer);

assert.equal(store.getState(), 0)

store.dispatch({type: 'INC'});

assert.equal(store.getState(), 1);

if (global.document) {
  document.write('My number is ' + store.getState());
}