import React from 'react';
import {Link} from 'react-router-dom';

export default class TcNav extends React.Component {
    render() {
        let hash = window.location.hash;
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <span className="navbar-brand" href="#">
                    <img className="navImage" src="https://cdnlinks.000webhostapp.com/final-logo.png" />
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={hash == "#/audit" ? "nav-link active" : "nav-link"} to="/audit">Audit</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hash == "#/addMyInventory" ? "nav-link active" : "nav-link"} to="/addMyInventory">Add Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hash == "#/addRequirement" ? "nav-link active" : "nav-link"} to="/addRequirement">Add Requirement</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hash == "#/changePassword" ? "nav-link active" : "nav-link"} to="/changePassword">Change Password</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}