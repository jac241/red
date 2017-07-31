import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import todoApp from './reducers'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

let store = createStore(todoApp)
console.log(store.getState())

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch(addTodo("Learn about me"))
store.dispatch(addTodo("Learn about redux"))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()