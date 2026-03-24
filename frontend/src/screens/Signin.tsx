import axios from "axios";

export function Signin() {
  async function signin() {
    axios.post("http://localhost:3000/api/signin", {
      username: document.getElementById("username")!.value,
      password: document.getElementById("password")!.value,
    }).then((response) => {
      localStorage.setItem("token", response.data.token);
      window.location = "/";
    });
    
  }
  return (
    <div>
      <input type="text" id="username" placeholder="Username" />
      <input type="password" id="password" placeholder="Password" />
      <button onClick={signin}>Sign in</button>
    </div>
  );
}
