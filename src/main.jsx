import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home.jsx';
import Listed from './Pages/Listed.jsx';
import PagesRead from './Pages/PagesRead.jsx';
import MainLayouts from './LAyout/MainLayouts.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/listed",
        element: <Listed></Listed>,
      },
      {
        path: "/pagesread",
        element: <PagesRead></PagesRead>,
      },

    ]
  },
 
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
