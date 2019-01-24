import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <Link class="navbar-brand" to="/">
                    <img src="http://localhost:3320/assets/arsenic_dashboard.png" width="170" height="60" class="d-inline-block align-top" alt="1"/>
                </Link>
            </nav>
                )
            }
}