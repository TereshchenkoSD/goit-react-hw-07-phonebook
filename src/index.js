import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={storeObject.persistor}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>,
  document.querySelector('#root'),
);
