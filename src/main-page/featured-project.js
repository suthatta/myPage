import React from "react";
import Project from "../project";

const FeaturedProject = ({project}) => {
  console.log("featuredProject", project);
  if (project) {
    return (
      <div>
        <div className="ro featuredProject">
          <h3 className="col-ml-12 text-center">Featured Project</h3>
        </div>
        <Project project={project} />
      </div>
    );
  }
  return <div>No Featured project at this time </div>;
};

export default FeaturedProject;
