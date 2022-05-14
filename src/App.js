import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Ortacha from "./ortachaVazifa/Ortacha";
import OsonApp from "./OsonVazifa/OsonApp";
import About from "./OsonVazifa/Pages/About/About";
import Blog from "./OsonVazifa/Pages/Blog/Blog";
import Home from "./OsonVazifa/Pages/Home/Home";
import Profile from "./OsonVazifa/Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <NavLink
        to="osonvazifa"
        style={{ fontSize: "2rem", marginRight: "1.2rem" }}
      >
        OsonApp
      </NavLink>
      <NavLink to="ortachavazifa" style={{ fontSize: "2rem" }}>
        OrtachaApp
      </NavLink>
      <Routes>
        <Route path="/osonvazifa" element={<OsonApp />} />
        <Route path="/ortachavazifa" element={<Ortacha />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
