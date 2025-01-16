import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layout from "./Components/Layout.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Project from "./Components/Project.jsx";
import Skills from "./Components/Skills.jsx";
import Education from "./Components/Education.jsx";
import Experiences from "./Components/Experiences.jsx";
import AboutLayout from "./Components/AboutLayout.jsx";
import NotFound from "./Components/NotFound.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route index element={<About />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experiences />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Project />} />
        <Route path="skills" element={<Skills />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

