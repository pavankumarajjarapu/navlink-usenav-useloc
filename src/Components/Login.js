import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  let userNameRef = useRef();
  let passwordRef = useRef();
  let nameRef=useRef();
  let navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,12}$/;
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <form>
        <h3>Login into your Account</h3>
        <div>
          <label>USERNAME</label>
          <input ref={nameRef} type="text"></input>
        </div>
        <div>
          <label>YOURMAIL</label>
          <input ref={userNameRef} type="email"></input>
        </div>
        <div>
          <label>PASSWORD</label>
          <input ref={passwordRef} type="password"></input>
        </div>
        <button
          type="button"
          onClick={() => {
            let userNameValidate = gmailRegex.test(userNameRef.current.value);
            let passwordValidate = passwordRegex.test(passwordRef.current.value);
            console.log(userNameValidate);
            if (userNameValidate == true &&  passwordValidate== true) {
              // console.log(userNameRef.current.value)
              // console.log(passwordRef.current.value)
              navigate("/dashboard" ,{state:{msg:`Hello ${nameRef.current.value} thankyou for login.`}},);
            } else {
              alert(`please enter valid mail and password`);
            }
          }}
        >
          Login
        </button>
      </form>
      <div>
        <Link to={"/signup"} className="bottomLink">
          {" "}
          you don't have account? then click me.
        </Link>
      </div>
    </div>
  );
}

export default Login;
