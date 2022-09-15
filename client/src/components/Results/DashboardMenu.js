import React from 'react'
import {
    NavLink
} from "react-router-dom";

export default function 
() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 w-100 rounded">
            <a className="navbar-brand mt-1" href="#"><h5>Dashboard</h5></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex justify-content-end">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fs-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Classes
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Manage Classses</a></li>
                            <li><a class="dropdown-item" href="#">Add Class</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fs-6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Students
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Add Student</a></li>
                            <li><a class="dropdown-item" href="#">Manage Students</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
