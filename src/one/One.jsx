import React from 'react';
import { Link } from 'react-router';
import styles from './one.less';

const One = React.createClass({
    render() {
        return (
            <div className="one">
                <h1>
                    Component 1
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/one/a">Component 1a</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
});

module.exports = One;