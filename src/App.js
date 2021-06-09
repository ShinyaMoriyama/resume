import { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import WithBackground from './components/common/withBackground';
// import NavBar from "./components/navBar";
import Projects from "./components/projects";
import Profile from './components/profile';
import Sidebar from "./components/sideBar";
// import './App.css';

function App() {
  return (
    <Fragment>
      <Sidebar />
      <div className="relative md:ml-48 bg-blueGray-100">
        <main>
            <Switch>
              <Route path="/profile" render={props => <WithBackground {...props} component={Profile} />} />
              <Route path="/projects" render={props => <WithBackground {...props} component={Projects} />} />
              <Redirect from="/" exact to="/profile" />
              <Redirect to="/not-found" />
            </Switch>
        </main>
      </div>
      {/* <NavBar /> */}
    </Fragment>
  );
}

export default App;
