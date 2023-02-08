import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (username === "admin@admin.com" && password === "admin123") {
      navigate("/");
      return;
    }
    else{
      alert("You enterd wrong credential")
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <i
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{ color: "#709085" }}
                ></i>
                <span className="h1 fw-bold">WelCome</span>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }} onSubmit={handleSubmit}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ "letter-spacing": "1px" }}
                  >
                    Log in
                  </h3>

                  <div className="form-outline mb-4">
                    <input
                      id="email"
                      label="Email Address"
                      name="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="email"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form2Example18">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form2Example28">
                      Password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-info btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <a
                      href="#!"
                      onClick={() => navigate("/register")}
                      className="link-info"
                    >
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt=""
                className="w-100 vh-100"
                style={{ "object-fit": "cover", "object-position": "left" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
