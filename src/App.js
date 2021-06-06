import { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Profile from './components/profile';
import NavBar from "./components/navBar";
import Projects from "./components/projects";
// import Example from "./components/example";
// import './App.css';

function App() {
  return (
    <Fragment>
      <NavBar />
      <main>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/projects" component={Projects} />
            <Redirect from="/" exact to="/profile" />
            <Redirect to="/not-found" />
          </Switch>
      </main>
    </Fragment>
  );
}

export default App;
