const Projects = ({ projects }) => {
  return (
    <ul>
      {projects.map((item, i) => (
        <li key={i}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Projects;
