import React from "react";
import {useState, useEffect} from "react";

const useProjects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const url = process.env.NODE_ENV
        ? "/"
        : "https://jbuican14.github.io/test-product-v1/";
      // const rsp = await fetch(`${url}projects.json`);
      const rsp = await fetch(
        "https://jbuican14.github.io/test-product-v1/projects.json"
      );
      const projects = await rsp.json();
      {
      }
      setAllProjects(projects);
    };
    fetchProjects();
  }, []);

  return allProjects;
};

export default useProjects;
