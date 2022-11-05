import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "../src/Routes/SimpleRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={routes}> </RouterProvider>
      <Toaster />
    </div>
  );
};

export default App;
