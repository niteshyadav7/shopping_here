import { createBrowserRouter } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Body from "./components/Body/Body";
import Contact from "./components/Body/Contact";
import About from "./components/Body/About";
import CarousalElement from "./components/Body/CarousalElement";
import CardElement from "./components/Body/CardElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/carousal/:id",
        element: <CarousalElement />,
      },
      {
        path: "/card/:id",
        element: <CardElement />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
