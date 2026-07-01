import React, { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./Components/common/Loader";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./Components/common/ScrollToTop";

const Layout = lazy(() => import("./Components/layout/Layout.jsx"));
const Home = lazy(() => import("./Components/sections/Home"));
const About = lazy(() => import("./Components/sections/About.jsx"));
const Contact = lazy(() => import("./Components/sections/Contact.jsx"));
const Project = lazy(() => import("./Components/sections/Project.jsx"));
const Skills = lazy(() => import("./Components/sections/Skills.jsx"));
const Education = lazy(() => import("./Components/sections/Education.jsx"));
const Experiences = lazy(() => import("./Components/sections/Experiences.jsx"));
const AboutLayout = lazy(() => import("./Components/layout/AboutLayout.jsx"));
const NotFound = lazy(() => import("./Components/sections/NotFound.jsx"));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
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
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
