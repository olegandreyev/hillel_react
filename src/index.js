import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { configureStore } from './task_1/store/createStore'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

