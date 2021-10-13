import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { login, loading } = useAuth();
  const history = useHistory();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    login(data);
    history.push("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={data.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <input type="submit" value={loading ? "loging in..." : "Login"} />
      </form>
    </div>
  );
};

export default Login;
