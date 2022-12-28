import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Allservices from "./components/Allservices";
import Addproducts from "./components/Addproducts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/services",
          element: <Allservices></Allservices>,
          loader: () => fetch("http://localhost:5000/services"),
        },
        {
          path: "/addproduct",
          element: <Addproducts></Addproducts>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
