import React from 'react'
import App from './App'
import Blog from './pages/Blog'
import './index.css'
import { createRoot }  from 'react-dom/client';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/blog",
      element: <Blog/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);

// const root = createRoot( document.getElementById("root") );
// root.render(<App/>);