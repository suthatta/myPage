import React from "react";
import {useState, useEffect} from "react";

const useProjects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const url = process.env.NODE_ENV
        ? "/"
        : "https://suthatta.github.io/myPage/";
      // const rsp = await fetch(`${url}projects.json`);
      const rsp = await fetch(
        "https://suthatta.github.io/myPage/projects.json"
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
