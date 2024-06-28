import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Signup() {
  let navigate =useNavigate();
  return (
    <div>
        <Navbar></Navbar>
      <form>
        <h1>SIGNUP</h1>
        <div>
          <label>First Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Mobile Number</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Date of birth</label>
          <input type="date"></input>
        </div>
        <div>
          <label>Gender:</label>

          <input type="radio" name="gender"></input>
          <label>Male</label>

          <input type="radio" name="gender"></input>
          <label>Female</label>
        </div>

        <button onClick={()=>{navigate("/login")}} >signup</button>
      </form>
      <div>
        <Link to={"/login"} className='bottomLink'>
          already you have account? then click me.
        </Link>
      </div>
    </div>
  );
}

export default Signup;
