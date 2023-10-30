import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <ul className="flex gap-5 mt-5">
      {projects.map((item) => (
        <li key={item.id}>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
