import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import UpdateUser from "./Components/UpdateUser.jsx";
import User from "./Components/User.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <User />,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/update/:id",
    element: <UpdateUser />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
