import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Add Pages
import Home from "./pages/home";
import Hotels from "./pages/hotel";
import Qa from "./pages/qa";
import Enrolled from "./pages/enrolled";
import Contact from "./pages/contact";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



// Router code Block
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Oops</h1>,
  },

  {
    path: "/hotels",
    element: <Hotels />,
    errorElement: <h1>Oops</h1>,
  },

  {
    path: "/qa",
    element: <Qa />,
    errorElement: <h1>Oops</h1>,
  },

  {
    path: "/enrolled",
    element: <Enrolled />,
    errorElement: <h1>Oops</h1>,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <h1>Oops</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

serviceWorkerRegistration.register();


const ScrollableContent = ({ children }) => {
  return (
    <main style={{ overflowY: 'auto', height: '300px' }}> {children} </main>
  );
};

export default ScrollableContent;
