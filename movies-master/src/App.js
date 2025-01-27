import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Allmovies from './components/Allmovies';
import Abcd from './components/Abcd';
import Tvshows from './components/Tvshows';
import { useEffect } from 'react';
import { auth } from "./utils/firebase";
import { useDispatch } from 'react-redux';
import { removeUser } from './utils/userSlice';


function App() {
  const dispatch = useDispatch();
  // creating router config file.
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body/>
    },
    {
      path: "/allmovies",
      element : <Allmovies/>
    },
    {
      path: "/abcd",
      element : <Abcd/>
    },
    {
      path: "/tvshows",
      element : <Tvshows/>
    }
  ]);


  return (
    <div className="container-fluid">
      {/* <Body/> */}
      <RouterProvider router={appRouter}  />
    </div>
  );
}

export default App;
