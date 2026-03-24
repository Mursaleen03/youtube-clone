import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { VideoPage } from "./screens/VideoPage";
import { Signin } from "./screens/Signin";
import { Signup } from "./screens/Signup";
import { Landing } from "./screens/Landing";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/watch" element={<VideoPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
