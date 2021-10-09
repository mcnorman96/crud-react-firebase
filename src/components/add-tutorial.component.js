import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeimg = this.onChangeimg.bind(this);
    this.onChangesliderfield = this.onChangesliderfield.bind(this);
    this.onChangetechfield = this.onChangetechfield.bind(this);
    this.onChangeurl = this.onChangeurl.bind(this);

    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      name: "",
      description: "",
      img: "",
      sliderfield: "",
      techfield: "",
      url: "",
      published: false,
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

  saveTutorial() {
    let data = {
      name: this.state.name,
      description: this.state.description,
      img: this.state.img,
      sliderfield: this.state.sliderfield,
      techfield: this.state.techfield,
      url: this.state.url,
      published: false
    };

    TutorialDataService.create(data)
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

  newTutorial() {
    this.setState({
      name: "",
      description: "",
      img: "",
      sliderfield: "",
      techfield: "",
      url: "",
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
            <button className="btn btn-success" onClick={this.newTutorial}>
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
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
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
            

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
