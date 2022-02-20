import React, { Component } from "react";
import ProjectDataService from "../services/project.service";

export default class AddProject extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeimg = this.onChangeimg.bind(this);
    this.onChangetype = this.onChangetype.bind(this);

    this.onChangesliderfield = this.onChangesliderfield.bind(this);
    this.onChangetechfield = this.onChangetechfield.bind(this);
    this.onChangeurl = this.onChangeurl.bind(this);
    this.onChangegithuburl = this.onChangegithuburl.bind(this);
    this.onChangeorder = this.onChangeorder.bind(this);

    this.saveProject = this.saveProject.bind(this);
    this.newProject = this.newProject.bind(this);

    this.state = {
      name: "",
      description: "",
      img: "",
      type: "",
      sliderfield: "",
      techfield: "",
      url: "",
      githuburl: "",
      published: false,
      order: "",
      submitted: false,
    };
  }

  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeimg(e) {
    this.setState({
      img: e.target.value,
    });
  }

  onChangetype(e) {
    this.setState({
      type: e.target.value,
    });
  }

  onChangesliderfield(e) {
    this.setState({
      sliderfield: e.target.value,
    });
  }

  onChangetechfield(e) {
    this.setState({
      techfield: e.target.value,
    });
  }

  onChangeurl(e) {
    this.setState({
      url: e.target.value,
    });
  }
  onChangegithuburl(e) {
    this.setState({
      githuburl: e.target.value,
    });
  }

  onChangeorder(e) {
    this.setState({
      order: e.target.value,
    });
  }

  saveProject() {
    let data = {
      name: this.state.name,
      description: this.state.description,
      img: this.state.img,
      type: this.state.type,
      sliderfield: this.state.sliderfield,
      techfield: this.state.techfield,
      url: this.state.url,
      githuburl: this.state.githuburl,
      published: false, 
      order: this.state.order,
    };

    ProjectDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newProject() {
    this.setState({
      name: "",
      description: "",
      img: "",
      type: "",
      sliderfield: "",
      techfield: "",
      url: "",
      githuburl: "",
      order: "",
      published: false,
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProject}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangename}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
              cols="40" rows="5"
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="img">img</label>
              <input
                type="text"
                className="form-control"
                id="img"
                required
                value={this.state.img}
                onChange={this.onChangeimg}
                name="img"
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                required
                value={this.state.type}
                onChange={this.onChangetype}
                name="type"
              />
            </div>

            <div className="form-group">
              <label htmlFor="sliderfield">sliderfield</label>
              <input
                type="text"
                className="form-control"
                id="sliderfield"
                required
                value={this.state.sliderfield}
                onChange={this.onChangesliderfield}
                name="sliderfield"
              />
            </div>

            <div className="form-group">
              <label htmlFor="techfield">techfield</label>
              <input
                type="text"
                className="form-control"
                id="techfield"
                required
                value={this.state.techfield}
                onChange={this.onChangetechfield}
                name="techfield"
              />
            </div>

            <div className="form-group">
              <label htmlFor="url">url</label>
              <input
                type="text"
                className="form-control"
                id="url"
                required
                value={this.state.url}
                onChange={this.onChangeurl}
                name="url"
              />
            </div>

            <div className="form-group">
              <label htmlFor="githuburl">githuburl</label>
              <input
                type="text"
                className="form-control"
                id="githuburl"
                required
                value={this.state.githuburl}
                onChange={this.onChangegithuburl}
                name="githuburl"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="order">order</label>
              <input
                type="text"
                className="form-control"
                id="order"
                required
                value={this.state.order}
                onChange={this.onChangeorder}
                name="order"
              />
            </div>

            <button onClick={this.saveProject} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
