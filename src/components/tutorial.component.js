import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Tutorial extends Component {
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
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
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
    const { tutorial } = nextProps;
    if (prevState.currentTutorial.id !== tutorial.id) {
      return {
        currentTutorial: tutorial,
        message: ""
      };
    }

    return prevState.currentTutorial;
  }

  componentDidMount() {
    this.setState({
      currentTutorial: this.props.tutorial,
    });
  }

  onChangename(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          name: name,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description,
      },
    }));
  }

  onChangeimg(e) {
    const img = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        img: img,
      },
    }));
  }

  onChangetype(e) {
    const type = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        type: type,
      },
    }));
  }

  onChangesliderfield(e) {
    const sliderfield = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        sliderfield: sliderfield,
      },
    }));
  }
  onChangetechfield(e) {
    const techfield = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        techfield: techfield,
      },
    }));
  }

  onChangeurl(e) {
    const url = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        url: url,
      },
    }));
  }

  updatePublished(status) {
    TutorialDataService.update(this.state.currentTutorial.id, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateTutorial() {
    const data = {
      name: this.state.currentTutorial.name,
      description: this.state.currentTutorial.description,
      type: this.state.currentTutorial.type,
      img: this.state.currentTutorial.img,
      sliderfield: this.state.currentTutorial.sliderfield,
      techfield: this.state.currentTutorial.techfield,
      url: this.state.currentTutorial.url,
    };

    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(() => {
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;
    console.log({ currentTutorial });
    return (
      <div>
        <h4>Tutorial</h4>
        {currentTutorial ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentTutorial.name}
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
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="img">img</label>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  value={currentTutorial.img}
                  onChange={this.onChangeimg}
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">type</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  value={currentTutorial.type}
                  onChange={this.onChangetype}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sliderfield">sliderfield</label>
                <input
                  type="text"
                  className="form-control"
                  id="sliderfield"
                  value={currentTutorial.sliderfield}
                  onChange={this.onChangesliderfield}
                />
              </div>
              <div className="form-group">
                <label htmlFor="techfield">techfield</label>
                <input
                  type="text"
                  className="form-control"
                  id="techfield"
                  value={currentTutorial.techfield}
                  onChange={this.onChangetechfield}
                />
              </div>
              <div className="form-group">
                <label htmlFor="url">url</label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  value={currentTutorial.url}
                  onChange={this.onChangeurl}
                />
              </div>
              

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}
