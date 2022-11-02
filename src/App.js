import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "../src/Routes/SimpleRoutes";

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={routes}> </RouterProvider>
    </div>
  );
};

export default App;
