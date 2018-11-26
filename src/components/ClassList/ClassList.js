import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
    
  }

  componentDidMount() {
    this.getClassList();
  }

  getClassList = () => {
    return axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`)
      .then(res => {
        console.log(res.data)
        this.setState({
          students: res.data
        })
      })
  }

  render() {
    let students = this.state.students.map(student => {
      return (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h3>{student.first_name} {student.last_name}</h3>
          </Link>
        </div>
      )
    })

    return (
      <div className="box">
        <h1>{ this.props.match.params.class }</h1>
        <h2>ClassList:</h2>
        { students }
        <Link to={`/`}><button>Back</button></Link>
      </div>
    )
  }
}

// * Open `src/components/ClassList/ClassList.js`.
// * Create a constructor method that initializes state with a property called `students`.
//   * `students` should default to an empty array.
// * Create a `componentDidMount` method that makes a `HTTP` request to the `json-server`:
//   * Install `axios` and `import` it into the component.
//   * The `json-server` API url is `http://localhost:3005/students?class=`.
//     * Class should equal `MATH1010` OR `ENG2010` OR `BIO2020` depending on the route parameter.
//     * Hint: `react-router-dom` passes down a `match` object on a component's `props`.
//   * Use the returned data from the API request to update the `students` array on `state`.

// * Go into the `render` method of the component.
// * `map` over the students and return an `h3` tag of the students `first` and `last` name.
//   * Remember react requires a unique `key` prop on mapped elements.
//   * The properties are called `first_name` and `last_name`.
// * Undearneath the `h2` tag, render the `mapped` over students.
// * Update the `h1` tag to display the page's class name.
//   * Hint: `react-router-dom` passes down a `match` object on a component's `props`.