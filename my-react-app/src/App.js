import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import Body from './components/Body';
import Cart from './components/Cart';
import Electro from './components/Electronics'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Body/>
    </div>
  );
}

// App Routing configuration.
const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>
  },
  {
    path : "/cart",
    element : <Cart/>
  },
  {
    path: "/electro",
    element : <Electro/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App></App>);
root.render(<RouterProvider router={appRouter}></RouterProvider>);


export default App;