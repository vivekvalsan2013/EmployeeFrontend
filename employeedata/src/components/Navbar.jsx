import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home";
import EmployeeForm from './EmployeeForm';

const Navbar = () => {
    return (
        <>
           <nav class="navbar navbar-expand-lg bg-body-tertiary" >
                <div class="container-fluid" style={{ backgroundColor: "transparent",padding:"10px"}}>
                    <h2 class="navbar-brand" style={{ color: "#05386B" }}>EmployeeApp</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link NavLink" style={{ color: "#05386B", fontSize: "18px" }} to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link NavLink" style={{ color: "#05386B", fontSize: "18px" }} to="/employeeform">Add Employee</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            

        </>
    )
}

export default Navbar
