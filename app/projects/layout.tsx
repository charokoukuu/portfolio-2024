import React from 'react';
import '../wordpress.css';

const ProjectsLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <main>{children}</main>;
};

export default ProjectsLayout;
