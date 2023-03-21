import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//* React toastify import
import 'react-toastify/dist/ReactToastify.css';

//* Prime react import
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <App />
  </>,
  document.getElementById('root')
);


