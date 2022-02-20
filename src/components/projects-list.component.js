import React, { Component } from "react";
import ProjectDataService from "../services/project.service";

import Project from "./project.component";

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProject = this.setActiveProject.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      projects: [],
      currentProject: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = ProjectDataService.getAll().orderBy("name", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let projects = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      projects.push({
        id: id,
        name: data.name,
        description: data.description,
        img: data.img,
        type: data.type,
        sliderfield: data.sliderfield,
        techfield: data.techfield,
        order: data.order,
        published: data.published,
        url: data.url,
        githuburl: data.githuburl,
      });
    });

    this.setState({
      projects: projects,
    });
  }

  refreshList() {
    this.setState({
      currentProject: null,
      currentIndex: -1,
    });
  }

  setActiveProject(project, index) {
    this.setState({
      currentProject: project,
      currentIndex: index,
    });
  }

  render() {
    const { projects, currentProject, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-3">
          <h4>Projects List</h4>

          <ul className="list-group">
            {projects &&
              projects.map((project, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveProject(project, index)}
                  key={index}
                >
                  {project.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-9">
          {currentProject ? (
            <Project
              project={currentProject}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Project...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
