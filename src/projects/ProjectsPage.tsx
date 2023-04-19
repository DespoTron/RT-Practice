import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';

function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
     <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

export default ProjectsPage;

// how to write a for loop counting up to 10

