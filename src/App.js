import React, { Component } from 'react';
import routes from './routes.js';
import {Link} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <Link to="/" className='links'>Home</Link>
              <Link to="/about" className='links'>About</Link>
          </div>
        </nav>
        {routes}
      </div>
    )
  }
}

// * Open `src/App.js`.
// * Import `Link` from `react-router-dom`.
// * Locate the `div` elements with className of links.
//   * Replace the `div` elements to be `Link` components.
//   * The Home link should be sent to `/`.
//   * The About link should be sent to `/about`.