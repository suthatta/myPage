import React from "react";
import {useParams} from "react-router-dom";
import Project from "./";

const ProjectFromQuery = ({allProjects}) => {
  const {id} = useParams();
  const project = allProjects.find((p) => p.id === parseInt(id));

  if (!project) return <div>Project not found.</div>;
  return <Project project={project}></Project>;
};

export default ProjectFromQuery;
