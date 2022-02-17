import React, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState([]);

  const changehandler = (e) => {
    const { value, name } = e.target;
    setUsername({
      ...username,
      [name]: value,
    });
  };

  useEffect(() => {});

  function login(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/api/login");
  }
  return (
    <div class="hold-transition login-page">
      <div class="login-box">
        <div class="card card-outline card-primary">
          <div class="card-header text-center">
            <a href="../../index2.html" class="h1">
              <b>Admin</b>-Workflow
            </a>
          </div>
          <div class="card-body">
            <p class="login-box-msg">Sign in to start your session</p>

            <form action="http://localhost:8080/api/login" method="post">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  placeholder="ID"
                  onChange={changehandler}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember Me</label>
                  </div>
                </div>

                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <div class="social-auth-links text-center mt-2 mb-3">
              <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" class="btn btn-block btn-danger">
                <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
              </a>
            </div>

            <p class="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p class="mb-0">
              <a href="/join" class="text-center">
                Register a new membership
              </a>
            </p>
          </div>
        </div>
      </div>
      <script src="../../plugins/jquery/jquery.min.js"></script>
      <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../../dist/js/adminlte.min.js"></script>
    </div>
  );
};

export default Login;
