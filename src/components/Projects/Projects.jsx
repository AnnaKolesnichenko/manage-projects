import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <ul className="flex gap-5 mt-5">
      {projects.map((item, i) => (
        <li key={i}>
          <Link to={`/${i}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
