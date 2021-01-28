import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './App'
import rootReducer from './reducers'


//create react store to maintain redux state
const store=createStore(rootReducer,
composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
 ,
  document.getElementById('root')
);

// Redux: It is a state container for Javascript applications.
//       The entire state of your application can be managed in one immutable object

// Why to use Redux?
//  --> a) You can easily manage the global state
//  --> b) You can easily keep track of changes with redux DevTools

// Terminology: Actions, Reducers, Store, Dispatch, Connect

// Action: Action sends data from your application to Redux store(type and payload)
// Reducer: It is a function that takes two parameters: state and action
           // It is immutable and always return a copy of the entire state
// Store: The global state of an application is stored in the store.
// Dispatch: It is a method available on the store object that accepts an 
            //object which is used to update the Redux state.
// Connect: It is a function to connect React to Redux                        

// Dependencies:
// a) redux: Core library
// b) react-redux: React bindings for Redux
// c) redux-thunk: Async middleware for redux
// d) redux-devtools-extension : Connects redux app to redux devtools
// e) react-router-dom: For router implementation

// Provider: It wraps the entire application in Redux
// thunk: a middleware that allows to make asynchronous actions in redux
// composeWithDevTools: code that connects your app to Redux DevTools