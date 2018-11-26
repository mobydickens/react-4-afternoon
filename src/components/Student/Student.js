import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount() {
    return axios.get(`http://localhost:3005/students/${ this.props.match.params.id }`).then(res => {
      console.log(res.data)
      this.setState({
        studentInfo: res.data
      })
    })
  }

  render() {
    
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{`${this.state.studentInfo.first_name} ${this.state.studentInfo.last_name}`}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
        <Link to={`/classlist/${this.state.studentInfo.class}`}><button>Back</button></Link>
      </div>
    )
  }
}

// * Open `src/components/Student/Student.js`.
// * Create a `constructor` method that initializes state with a property called `studentInfo`.
//   * `studentInfo` should default to an empty object.
// * Create a `componentDidMount` method that makes an `HTTP` request to the `json-server`:
//   * Import `axios` into the component.
//   * The `json-server` API url is `http://localhost:3005/students/ID_GOES_HERE`.
//     * `ID_GOES_HERE` should equal the student's id.
//     * Hint: `react-router-dom` passes down a `match` object on a component's `props`.
//   * Use the returned data from the API request to update the `studentInfo` object on `state`.
// * Go into the `render` method of the component.
// * Underneath the `h1` tag, display `studentInfo` properties off of `state`:
//   * `first_name` and `last_name` within an `h1` tag.
//   * The text `Grade:` followed by the `grade` property within an `h3` tag.
//   * The text `Email:` followed by the `email` property within an `h3` tag.