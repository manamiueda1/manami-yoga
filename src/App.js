
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Home from "./components/Home/Home";
import About from './components/About/About'
import './App.css'


// #246A73
function App() {
  return (
    <Router>
      <div id='App'>
        <Nav />
        <div id="Content">
        <Home/>
        <About/>
          {/* <Routes>
            <Route exact path ='/' element={<Home/>} />
          </Routes> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
