import React from "react";

function Signup(props) {
  return (
    <div>
      <from>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <button type="button">Submit</button>
      </from>
      <a href="/login">
        <button>Log in</button>
      </a>
    </div>
  );
}

export default Signup;
