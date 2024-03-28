import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Listed from "../Pages/Listed";
import PagesRead from "../Pages/PagesRead";
import MainLayouts from "../LAyout/MainLayouts";
import Content from "../Components/Content";
import Author from "../Components/Author";
import Review from "../Pages/Review";
import Footer from "../Components/Footer";
import Contact from "../Pages/Contact";
import Details from "../Pages/Details";
import Error from "../Pages/Error";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: "/listed",
          element: <Listed></Listed>,
          children: [
            {
                index: true,
                element: <Content></Content>
            },
            {
                path: 'author',
                element: <Author></Author>
            }
          ]
        },
        {
          path: "/pagesread",
          element: <PagesRead></PagesRead>,
        },
        {
          path: "/review",
          element: <Review></Review>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
        },
        {
          path: "*",
          element: <Error></Error>
        },
  
      ]
      
    },
      
  ]);