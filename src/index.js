// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Ensure Provider is imported here
import './index.css';
import App from './App';
import { store } from './app/store'; // Import the store here

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App in Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
