import axios from "axios";

export function Signup() {
  async function signup() {
    axios.post("http://localhost:3000/api/signup", {
      username: document.getElementById("username")!.value,
      password: document.getElementById("password")!.value,
      channelName: document.getElementById("channelName")!.value,
      gender: document.getElementById("gender")!.value,
    }).then(response => {
      localStorage.setItem("token", response.data.token);
      window.location = "/signin";
    });
  }
  return (
    <div>
      <input type="text" id="username" placeholder="Username" />
      <input type="password" id="password" placeholder="Password" />
      <input type="text" id="channelName" placeholder="Channel Name" />
      <select name="gender" id="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <button onClick={signup}>Sign up</button>
    </div>
  );
}
