import useBreakpoints from '../../hooks/useBreakpoints'
import { useEffect, useState } from 'react'
import usePagination from '../../hooks/pagination/usePagination'
import ProjectCard from './projectCard'
import projects from '../../data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProjectDetails from './details/projectDetails'
import usePreventScroll from '../../hooks/usePreventScroll'

const gridConfig = {
  '2xl': {
    classes: '[&>*]:w-1/4',
    itemsPerPage: 8
  },
  xl: {
    classes: '[&>*]:w-1/4',
    itemsPerPage: 8
  },
  lg: {
    classes: '[&>*]:w-1/3',
    itemsPerPage: 6
  },
  md: {
    classes: '[&>*]:w-1/3',
    itemsPerPage: 6
  },
  sm: {
    classes: '[&>*]:w-1/2',
    itemsPerPage: 4
  },
  xs: {
    classes: '[&>*]:w-full',
    itemsPerPage: 2
  }
}

const Works = ({ isActive }) => {
  const { activeBreakpoint } = useBreakpoints();
  const [activeGridConfig, setActiveGridConfig] = useState(gridConfig[activeBreakpoint]);

  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    console.log(activeBreakpoint)
    setActiveGridConfig(gridConfig[activeBreakpoint]);
  }, [activeBreakpoint]);

  useEffect(() => {
    // Reset active page when the component is out of sight
    if (!isActive) return
    setActiveProject(null)
  }, [isActive]);


  const openProject = (project) => setActiveProject(project);
  const closeProject = () => setActiveProject(null);


  const { textElement } = usePreventScroll()

  return (
      <div className="h-full flex flex-col justify-center">
        { activeProject === null
            ? (
                <>
                  <h1 className="text-3xl text-white font-bold">Works</h1>

                  <div ref={ textElement }
                       className={ `flex flex-wrap max-h-[calc(100%-36px)] overflow-y-auto ${ activeGridConfig.classes }` }>
                    { projects.map((project, index) => (
                        <ProjectCard key={ index } project={ project } openProject={ openProject }/>
                    )) }
                  </div>
                </>
            ) : (
                <ProjectDetails project={ activeProject } closeProject={ closeProject }/>
            )

        }
      </div>
  );

}

export default Works;