import React from 'react';
import { Link } from 'react-router';
import styles from './shell.css';

const Main = React.createClass({
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/one">Component 1</Link>
            </li>
            <li>
              <Link to="/two">Component 2</Link>
            </li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

module.exports = Main;
