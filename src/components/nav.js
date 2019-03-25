import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
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
                            <Link className={hash == "#/viewAudit" ? "nav-link active" : "nav-link"} to="/viewAudit">View Audits</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hash == "#/addInventory" ? "nav-link active" : "nav-link"} to="/addInventory">Add Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hash == "#/assignInventory" ? "nav-link active" : "nav-link"} to="/assignInventory">Assign Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hash == "#/unassignInventory" ? "nav-link active" : "nav-link"} to="/unassignInventory">Unassigned Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hash == "#/unaditedInventory" ? "nav-link active" : "nav-link"} to="/unaditedInventory">Unaudited Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hash == "#/requirement" ? "nav-link active" : "nav-link"} to="/requirement">Requirements</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={hash == "#/hraudit" ? "nav-link active" : "nav-link"} to="/hraudit">Audit</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}