import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorElement } from "./components";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Planner from "./pages/Planner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },

      { path: "about", element: <About /> },
      { path: "planner", element: <Planner /> },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router}>
      <h1 className="text-7xl font-bold underline">Tailwind project</h1>;
    </RouterProvider>
  );
};
export default App;
