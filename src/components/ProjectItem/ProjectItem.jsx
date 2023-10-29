const ProjectItem = ({ item, i }) => {
  return <li key={i}>{item.title}</li>;
};

export default ProjectItem;
