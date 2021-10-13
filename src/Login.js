import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { login, loading, error, setError } = useAuth();
  const history = useHistory();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setError("")
    login(data);
    if(error) return
    history.push("/");
  };
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-6 login-section-wrapper">
          <div className="login-wrapper my-auto">
            <h1 className="login-title">Login</h1>
            {error && <p style={{ color: 'red'}}>{error}</p>}
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="username"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="submit"
                value={loading ? "loging in..." : "Login"}
                className="btn btn-block login-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
