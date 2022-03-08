import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Addproject from "./components/add-project.component";
import projectsList from "./components/projects-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/projects" className="navbar-brand">
            Norman
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/projects"} className="nav-link">
                  Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firestore CRUD</h2>
          <Switch>
            <Route exact path={["/", "/projects"]} component={projectsList} />
            <Route exact path="/add" component={Addproject} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
