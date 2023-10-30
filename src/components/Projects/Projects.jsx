const Projects = ({ projects }) => {
  return (
    <ul className="flex gap-5 mt-5">
      {projects.map((item, i) => (
        <li key={i}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Projects;
