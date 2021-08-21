import "./App.css";

import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Post from "./Components/Post";

function App() {
  return (
    <BrowserRouter className="App">
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/:post_id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
