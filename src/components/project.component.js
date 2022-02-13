import React, { Component } from "react";
import ProjectDataService from "../services/project.service";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeimg = this.onChangeimg.bind(this);
    this.onChangetype = this.onChangetype.bind(this);

    this.onChangesliderfield = this.onChangesliderfield.bind(this);
    this.onChangetechfield = this.onChangetechfield.bind(this);
    this.onChangeurl = this.onChangeurl.bind(this);

    this.updatePublished = this.updatePublished.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);

    this.state = {
      currentProject: {
        id: null,
        name: "",
        description: "",
        img: "",
        type: "",
        sliderfield: "",
        techfield: "",
        url: "",
        published: false,
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { project } = nextProps;
    if (prevState.currentProject.id !== project.id) {
      return {
        currentProject: project,
        message: ""
      };
    }

    return prevState.currentProject;
  }

  componentDidMount() {
    this.setState({
      currentProject: this.props.project,
    });
  }

  onChangename(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentProject: {
          ...prevState.currentProject,
          name: name,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentProject: {
        ...prevState.currentProject,
        description: description,
      },
    }));
  }

  onChangeimg(e) {
    const img = e.target.value;

    this.setState((prevState) => ({
      currentProject: {
        ...prevState.currentProject,
        img: img,
      },
    }));
  }

  onChangetype(e) {
    const type = e.target.value;

    this.setState((prevState) => ({
      currentProject: {
        ...prevState.currentProject,
        type: type,
      },
    }));
  }

  onChangesliderfield(e) {
    const sliderfield = e.target.value;

    this.setState((prevState) => ({
      currentProject: {
        ...prevState.currentProject,
        sliderfield: sliderfield,
      },
    }));
  }
  onChangetechfield(e) {
    const techfield = e.target.value;

    this.setState((prevState) => ({
      currentProject: {
        ...prevState.currentProject,
        techfield: techfield,
      },
    }));
  }

  onChangeurl(e) {
    const url = e.target.value;

    this.setState((prevState) => ({
      currentProject: {
        ...prevState.currentProject,
        url: url,
      },
    }));
  }

  updatePublished(status) {
    ProjectDataService.update(this.state.currentProject.id, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentProject: {
            ...prevState.currentProject,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateProject() {
    const data = {
      name: this.state.currentProject.name,
      description: this.state.currentProject.description,
      type: this.state.currentProject.type,
      img: this.state.currentProject.img,
      sliderfield: this.state.currentProject.sliderfield,
      techfield: this.state.currentProject.techfield,
      url: this.state.currentProject.url,
    };

    ProjectDataService.update(this.state.currentProject.id, data)
      .then(() => {
        this.setState({
          message: "The project was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteProject() {
    ProjectDataService.delete(this.state.currentProject.id)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentProject } = this.state;
    return (
      <div>
        <h4>Project</h4>
        {currentProject ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentProject.name}
                  onChange={this.onChangename}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                cols="40" rows="5"
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentProject.description}
                  onChange={this.onChangeDescription}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="img">img</label>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  value={currentProject.img}
                  onChange={this.onChangeimg}
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">type</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  value={currentProject.type}
                  onChange={this.onChangetype}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sliderfield">sliderfield</label>
                <input
                  type="text"
                  className="form-control"
                  id="sliderfield"
                  value={currentProject.sliderfield}
                  onChange={this.onChangesliderfield}
                />
              </div>
              <div className="form-group">
                <label htmlFor="techfield">techfield</label>
                <input
                  type="text"
                  className="form-control"
                  id="techfield"
                  value={currentProject.techfield}
                  onChange={this.onChangetechfield}
                />
              </div>
              <div className="form-group">
                <label htmlFor="url">url</label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  value={currentProject.url}
                  onChange={this.onChangeurl}
                />
              </div>
            </form>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateProject}
            >
              Update
            </button>


            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteProject}
            >
              Delete
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a project...</p>
          </div>
        )}
      </div>
    );
  }
}
