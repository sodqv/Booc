import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.tsx';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import LoginRoot from './component/login/Login_root.tsx';
import Login from "./component/login/Login.tsx"
import SignUp from "./component/login/Sign_up.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoot />,
    children:[
      {
        index: true,
        //path:"Login",
        element: <Login />,
      },
      {
        path:"SignUp",
        element: <SignUp />,
      }
    ],
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
