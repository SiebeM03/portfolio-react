import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Description from './description'
import Technologies from './technologies'
import ResultsComponent from './resultsComponent'
import GithubButton from '../../../components/githubButton'


const ProjectDetails = ({ project, closeProject }) => {
  const [activeSegment, setActiveSegment] = useState(project.tabs[0].title);

  return (
      <div className="h-full"
           onTouchStart={ (e) => e.stopPropagation() }
           onTouchMove={ (e) => e.stopPropagation() }
           onTouchEnd={ (e) => e.stopPropagation() }
      >
        <button onClick={ closeProject } onTouchEnd={ closeProject }
                className="text-base flex items-center opacity-50 hover:opacity-100 duration-200">
          <FontAwesomeIcon icon={ faArrowLeft } className="h-5 mr-2"/> Go back
        </button>

        <div className="h-full mt-4">
          <h1 className="text-3xl text-white font-bold flex items-center">
            { project.name }
            { project.github && <GithubButton url={ project.github } classes="ml-12 h-8 w-8 hover:text-color-accent duration-200"/> }
          </h1>

          <div className="px-4 mt-4 h-full flex flex-col">
            <div className="flex justify-around">
              { project.tabs.map((tab, index) => {
                const isActive = activeSegment === tab.title;
                return (
                    <button key={ index }
                            onClick={ () => setActiveSegment(tab.title) }
                            onTouchEnd={ () => setActiveSegment(tab.title) }
                            className={ `w-1/3 flex flex-col items-center group space-y-1 text-white text-lg ${ isActive ? '' : 'opacity-50' }` }>
                      <div className={ `mx-auto w-8 h-8 ${ isActive ? 'text-color-accent' : 'text-white' }` }>
                        { tab.icon }
                      </div>
                      <p className={ `${ isActive ? 'visible underline decoration-2 decoration-color-accent' : 'invisible group-hover:visible' } capitalize ` }>
                        { tab.title }
                      </p>
                    </button>
                )
              })
              }
            </div>

            <div className="mt-4 h-full flex-1">
              { activeSegment === 'description' && (
                  <Description description={ project.description.long }/>
              ) }

              { activeSegment === 'technologies' && (
                  <Technologies skills={ project.skills }/>

              ) }

              { activeSegment === 'results' && (
                  <ResultsComponent results={ project.results }/>
              ) }
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectDetails;