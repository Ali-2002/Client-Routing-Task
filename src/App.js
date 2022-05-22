import { Routes, Route, Link } from "react-router-dom";
import About from "./MyPages/About";
import Contacts from "./MyPages/Contacts";
import Portfolio from "./MyPages/Portfolio";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <Link className="" to="/#">
          Home
        </Link>
        <div className="main">
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;