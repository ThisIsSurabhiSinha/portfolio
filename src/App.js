// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/scss/bootstrap.scss";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Layout from "./Components/Layout.jsx";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About.jsx";
// import Contact from "./Components/Contact.jsx";
// import Project from "./Components/Project.jsx";
// import Skills from "./Components/Skills.jsx";
// import Education from "./Components/Education.jsx";
// import Experiences from "./Components/Experiences.jsx";
// import AboutLayout from "./Components/AboutLayout.jsx";
// import NotFound from "./Components/NotFound.jsx";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/about" element={<AboutLayout />}>
//             <Route index element={<About />} />
//             <Route path="education" element={<Education />} />
//             <Route path="experience" element={<Experiences />} />
//           </Route>
//           <Route path="contact" element={<Contact />} />
//         <Route path="projects" element={<Project />} />
//         <Route path="skills" element={<Skills />} />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader"; // Import the loader

// Lazy-loaded components
const Layout = lazy(() => import("./Components/Layout.jsx"));
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About.jsx"));
const Contact = lazy(() => import("./Components/Contact.jsx"));
const Project = lazy(() => import("./Components/Project.jsx"));
const Skills = lazy(() => import("./Components/Skills.jsx"));
const Education = lazy(() => import("./Components/Education.jsx"));
const Experiences = lazy(() => import("./Components/Experiences.jsx"));
const AboutLayout = lazy(() => import("./Components/AboutLayout.jsx"));
const NotFound = lazy(() => import("./Components/NotFound.jsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Router>
  );
}

export default App;

