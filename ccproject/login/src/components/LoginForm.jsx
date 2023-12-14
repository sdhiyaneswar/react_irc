import React from 'react';
import './Login.css'; // Make sure to replace 'YourCssFile.css' with the correct path to your CSS file

function LoginForm() {
  return (
    <div>
      <h2>Login Page</h2><br />
      <div className="login">
        <form id="login" method="get" action="login.php">
          <label>
            <b>User Name</b>
          </label>
          <input type="text" name="Uname" id="Uname" placeholder="Username" />
          <br /><br />
          <label>
            <b>Password</b>
          </label>
          <input type="password" name="Pass" id="Pass" placeholder="Password" />
          <br /><br />
          <input type="button" name="log" id="log" value="Log In Here" />
          <br /><br />
          <input type="checkbox" id="check" />
          <span>Remember me</span>
          <br /><br />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;