import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = (e) => {
    const newUser = e.target.value;
    setUsername(newUser);
    console.log(newUser);
  };

  const pass = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    console.log(newPass);
  };

  function Form() {
    pass();
    user();
  }
  return (
    <>
      <form>
        <label>Username</label>
        <input type="username" value={username} onChange={user} />
        <p class="uName">Username: {username}</p>

        <label>Password</label>
        <input type="username" value={password} onChange={pass} />
        <p>Username: {password}</p>

        <button onSubmit={Form}>Submit</button>
      </form>
    </>
  );
};

export default Login;
