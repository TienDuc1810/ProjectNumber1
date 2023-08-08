import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore =  createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENTION__&&window.__REDUX_DEVTOOLS_EXTENTION__()
  );
root.render(
  <React.StrictMode>
    <Provider store = {reduxStore}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
