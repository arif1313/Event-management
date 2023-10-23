import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Acount from './Component/Acount/Acount.jsx';
import Privet from './Component/Privet/Privet';
import Profile from './Component/profile/Profile';

import ContexApi from './Component/Contex/ContexApi';
import Home from './Component/Home/Home';
import SineUp from './Component/SineUp/SineUp';
import Login from './Component/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[

      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('/event.json')
       
      },
      {
        path:'/sinup',
        element:<SineUp></SineUp>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/acount',
        element: <Acount></Acount>
      },
      {
        path:'/profile',
        element: <Privet><Profile></Profile></Privet>
      },
      {
        path:'/Acount',
        element: <Privet><Acount></Acount></Privet>
      }
    ]
   
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <ContexApi>
  <RouterProvider router={router} />
  </ContexApi>
  </React.StrictMode>,
)
