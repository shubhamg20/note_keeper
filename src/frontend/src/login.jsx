import React from "react";

export default function Login() {
  return (
    <div class="container mt-5">
      <h1>Login</h1>

      <div class="row">
        <div class="col-sm-8">
          <div class="card">
            <div class="card-body">
              <form action="/login" method="POST">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" name="username" />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" name="password" />
                </div>
                <button type="submit" class="btn btn-dark">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-padding"></div>
      <div className="footer">
        <p>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by The Programmer
        </p>
      </div>
    </div>
  );
}
