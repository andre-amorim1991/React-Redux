import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux'

function reducer(state = 0, action) {
  if(action.type === "ADICIONAR"){
    return state+1;
  }
  else if(action.type === "SUBTRAIR"){
    return state-1;
  }
  else{
    return state;
  }
}

function nomesReducer(state = "Seu texto Aqui", action){
  if (action.type === "TEXTO"){
    return state = "Aqui altera o texto";
  }
  else if(action.type === "OUTROTEXTO"){
    return state = "O texto foi alterado";
  }
  else{
    return state;
  }
}

const reducers = combineReducers({nomesReducer, reducer})

const store = createStore(reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);