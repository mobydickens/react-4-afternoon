import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import ClassList from './components/ClassList/ClassList.js';
import Student from './components/Student/Student.js';

export default (
    <Switch>
        <Route component={ Home } exact path="/" />
        <Route component={ About } path="/about" />
        <Route component={ ClassList } path="/classlist/:class" />
        <Route component={ Student } path="/student/:id" />
    </Switch>
)
// * Install React Router (`npm install --save react-router-dom`).
// * Create a new file in `./src` called `routes.js` and open it.
// * Configure a router in this file: 
//   * Use the following components as routes:
//     * `./src/components/Home/Home.js`
//     * `./src/components/About/About.js`
//   * Use the following combinations of paths and components for your routes:
//     * Path: "/" - Component: `Home` - This path should be exact.
//     * Path: "/about" - Component: `About`.

