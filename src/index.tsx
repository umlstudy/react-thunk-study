import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const useStrictMode = false;

if (useStrictMode) {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// reportWebVitals(console.log);
