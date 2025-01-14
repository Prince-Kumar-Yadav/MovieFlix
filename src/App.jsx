import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Movie } from "./Pages/Movies";
import { Contact, contactData} from "./Pages/Contact";
import AppLayout from "./Components/layout/AppLayout";
import './App.css';
import { ErrorPage } from "./Pages/ErrorPage";
import { GetMoviesData } from "./API/GetAPIData";
import { MoviesDetails } from "./Components/UI/MoviesDetails";
import { GetMoviesDetails } from "./API/GetMoviesDetails";
// import { GetMoviesDetails, GetMovieDetails } from "./API/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />, // Use AppLayout as the layout wrapper
      errorElement:<ErrorPage />,
      children: [
        {
          path: "/", // Default route
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "movie",
          element: <Movie />,
          loader: GetMoviesData,
        },
        //
        {
          path: "/movie/:movieID",
          element: <MoviesDetails />,
          loader: GetMoviesDetails,
        },
        // {
        //   path: "/contact", // Check if this is a typo and should be "contact"
        //   element: <Contact />,
        //   action: contactData,
        // },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        }
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

// Using in this project OMDb API .


