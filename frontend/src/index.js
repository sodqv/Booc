import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'

import reportWebVitals from './reportWebVitals.js';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

//import Test from './component/login/Login_root.js';

import Test from './component/forms/create_new_event.js'

//testa den här i
const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
