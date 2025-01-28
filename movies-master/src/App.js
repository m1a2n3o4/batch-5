import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Allmovies from './components/Allmovies';
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
