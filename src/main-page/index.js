import React from "react";
import {useEffect, useState, useMemo} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedProject from "./featured-project";
import SearchResults from "../search-results";
import ProjectFilter from "./project-filter";
import useProjects from "../hooks/useProjects";
//import useFeaturedProjects from "../hooks/useFeaturedProject";
import ProjectFromQuery from "../project/ProjectFromQuery";

// props is suptitle sent to header.js

function App() {
  //  const projects = useProjects();
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.NODE_ENV
        ? "/"
        : "https://jbuican14.github.io/test-product-v1/";
      console.log("url", url);
      // const rsp = await fetch(`${url}projects.json`);
      const rsp = await fetch(
        "https://jbuican14.github.io/test-product-v1/projects.json"
      );
      const projects = await rsp.json();
      setAllProjects(projects);
    };
    fetchData();
  }, []);

  let featuredProject = useMemo(() => {
    if (allProjects.length) {
      const randomIndex = Math.floor(Math.random() * allProjects.length);
      return allProjects[randomIndex];
    }
  }, [allProjects]);

  const userName = "Providing all Secound-Hands products";
  return (
    <Router>
      <div className="container">
        <Header subtitle={userName} />
        <ProjectFilter allProjects={allProjects} />
      </div>

      <Routes>
        <Route path="/about">About</Route>
        <Route
          path="/searchresults/:category"
          element={<SearchResults allprojects={allProjects} />}
        />
        <Route
          path="/project/:id"
          element={<ProjectFromQuery allProjects={allProjects} />}
        />
        <Route
          path="/"
          element={<FeaturedProject project={featuredProject} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
