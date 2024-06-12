import useBreakpoints from '../../hooks/useBreakpoints'
import { useEffect, useState } from 'react'
import usePagination from '../../hooks/pagination/usePagination'
import ProjectCard from './projectCard'
import projects from '../../data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProjectDetails from './details/projectDetails'

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

  const {
    activePage,
    setActivePage,
    pageCount,
    handlePrevPage,
    handleNextPage,
    getPaginatedItems
  } = usePagination(projects, activeGridConfig.itemsPerPage);


  useEffect(() => {
    setActiveGridConfig(gridConfig[activeBreakpoint]);
    if (activePage > pageCount) setActivePage(pageCount);
  }, [activeBreakpoint, activePage, pageCount, setActivePage]);

  useEffect(() => {
    // Reset active page when the component is out of sight
    if (!isActive) return
    setActivePage(1);
    setActiveProject(null)
  }, [isActive, setActivePage]);


  const openProject = (project) => setActiveProject(project);
  const closeProject = () => setActiveProject(null);

  return (
      <div className="h-full flex flex-col justify-center">
        { activeProject === null
            ? (<>
                  <h1 className="text-3xl text-white font-bold">Works</h1>

                  <div className={ `flex-1 flex flex-wrap max-h-side-nav items-center ${ activeGridConfig.classes }` }>
                    { getPaginatedItems().map((project, index) => (
                        <ProjectCard key={ index } project={ project } openProject={ openProject }/>
                    )) }
                  </div>

                  { activeGridConfig.itemsPerPage < projects.length && (
                      <div className="min-w-20 max-h-20 pb-2">
                        <div
                            className="ml-auto w-min flex h-10 justify-end my-3 border border-color-accent rounded-lg overflow-hidden">
                          <button className="hover:bg-blue-600 duration-200 text-white px-4 py-2"
                                  onTouchEnd={ handlePrevPage }
                                  onClick={ handlePrevPage }>
                            <FontAwesomeIcon icon={ faChevronLeft }/>
                          </button>
                          <div className="w-16 text-center py-2">{ activePage } / { pageCount }</div>
                          <button className="hover:bg-blue-600 duration-200 text-white px-4 py-2"
                                  onTouchEnd={ handleNextPage }
                                  onClick={ handleNextPage }>
                            <FontAwesomeIcon icon={ faChevronRight }/>
                          </button>
                        </div>
                      </div>
                  ) }
                </>
            ) : (
                <ProjectDetails project={ activeProject } closeProject={ closeProject }/>
            )

        }
      </div>
  );

}

export default Works;