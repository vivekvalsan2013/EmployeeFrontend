import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'
import {Link,Route,Routes} from "react-router-dom"
import logo from "../images/logo.png"

const EmployeeForm = () => {
  return (
    <>
        <Helmet>
            <style>{'body { background-color:#8EE4AF; }'}</style>
        </Helmet>
        <Navbar/>
        <h2 style={{ textAlign: "right", color: "whitesmoke", marginRight:"330px" }}>ADD EMPLOYEE</h2>
        <img id="logoimg" src={logo} width="400px" alt="Unavailable" />
        <div className="container-fluid">
        <form class="row g-2 formsize" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Name</label>
    <input type="text" class="form-control" id="validationCustom01" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Designation</label>
    <input type="text" class="form-control" id="validationCustom02"  required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Salary</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">$</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Location</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Add Employee</button>
  </div>
</form>
</div>
      </>
  )
}

export default EmployeeForm
