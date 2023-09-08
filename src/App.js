import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import LayOut from './Components/LayOut/LayOut';


const router = createBrowserRouter([
  {path:"/", element : <LayOut/>, children:[
    {path : "/", element:<Home/>},
    {path : "about", element:<About/>},
    {path : "portfolio", element:<Portfolio/>},
    {path : "contact", element:<Contact/>},
  ]}
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>

    </div>
  );
}

export default App;
