
import { Routes, Route } from "react-router-dom"

import About from "./About/About";
import Home from "./Home/Home";
import Service from "./Service/Service";
import Blog from "./Blog/Blog";
import Blogpg from "./Blogpg/Blogpg";



function App() {
  return (
    <>


      


 <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/service" element={ <Service/> } />
        <Route path="/blog" element={ <Blogpg/> } />
      </Routes>
    </div> 
    {/* <Blogpg/> */}

    </>
  );
}

export default App;
