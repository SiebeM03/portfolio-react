import useBreakpoints from '../../hooks/useBreakpoints'
import { useEffect, useState } from 'react'
import ProjectCard from './projectCard'
import projects from '../../data/projects'
import ProjectDetails from './details/projectDetails'
import usePreventScroll from '../../hooks/usePreventScroll'

const gridConfig = {
  '2xl': {
    classes: '[&>*]:w-1/4',
  },
  xl: {
    classes: '[&>*]:w-1/4',
  },
  lg: {
    classes: '[&>*]:w-1/3',
  },
  md: {
    classes: '[&>*]:w-1/3',
  },
  sm: {
    classes: '[&>*]:w-1/2',
  },
  xs: {
    classes: '[&>*]:w-full',
  }
}

const Works = ({ isActive }) => {
  const { activeBreakpoint } = useBreakpoints();
  const [activeGridConfig, setActiveGridConfig] = useState(gridConfig[activeBreakpoint]);

  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    setActiveGridConfig(gridConfig[activeBreakpoint]);
  }, [activeBreakpoint]);

  useEffect(() => {
    // Reset active page when the component is out of sight
    if (!isActive) return
    setActiveProject(null)
  }, [isActive]);


  const openProject = (project) => setActiveProject(project);
  const closeProject = () => setActiveProject(null);


  const { textElement } = usePreventScroll(isActive)

  return activeProject === null
      ? (
          <div className="h-full flex flex-col justify-center">

            <h1 className="text-3xl text-white font-bold">Works</h1>
            <div ref={ textElement } className={ `flex flex-wrap max-h-[calc(100%-206px)] overflow-y-auto ${ activeGridConfig.classes }` }>
              { projects.map((project, index) => (
                  <ProjectCard key={ index } project={ project } openProject={ openProject }/>
              )) }
            </div>
          </div>
      ) : (
          <ProjectDetails project={ activeProject } closeProject={ closeProject }/>
      )


}

export default Works;