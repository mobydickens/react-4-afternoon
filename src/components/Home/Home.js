import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to="/classlist/MATH1010"><button className='btn'>Math 1010</button></Link>
        <Link to="/classlist/ENG2010"><button className='btn'>English 2010</button></Link>
        <Link to="/classlist/BIO2020"><button className='btn'>Biology 2020</button></Link>
      </div>
    );
  }
}

// * Wrap each `button` element with a `Link` component.
// * Each link should direct to the path `/classlist` with the class parameter.
//   * Math 1010 - `/classlist/MATH1010`
//   * English 2010 - `/classlist/ENG2010`
//   * Biology 2020 - `/classlist/BIO2020`