const ProjectCard = ({ project, openProject }) => {

  return (
      <div className="h-1/2 p-2" onClick={ () => openProject(project) } onTouchEnd={ () => openProject(project) }>
        <div
            className="h-full bg-color-background-400 hover:bg-color-background-200 duration-200 border-2 border-color-background-300 rounded-lg overflow-hidden p-4 cursor-pointer">
          <h2 className="text-xl font-bold text-white">{ project.name }</h2>
          <p className="text-white">{ project.description.short }</p>

          <div className="flex flex-wrap">
            { project.skills.map((skill, index) => (
                <img key={ index } src={ skill.image } alt={ skill.name } className="h-8 mr-2"/>
            ))
            }
          </div>
        </div>
      </div>
  );
}

export default ProjectCard;