import "./App.css";
import { Card } from "flowbite-react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/Register", element: <SignIn /> },
  ]);

  return (
    <RouterProvider router={router} />
    // <Card href="#" className="max-w-sm">
    //   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //     Noteworthy technology acquisitions 2021
    //   </h5>
    //   <p className="font-normal text-gray-700 dark:text-gray-400">
    //     Here are the biggest enterprise technology acquisitions of 2021 so far,
    //     in reverse chronological order.
    //   </p>
    // </Card>
  );
}

export default App;
