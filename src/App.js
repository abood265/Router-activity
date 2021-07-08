import './App.css';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import ContactUs from './components/ContactUs';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Search">Search</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact us</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
