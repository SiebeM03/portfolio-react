import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Description from './description'
import Technologies from './technologies'
import projects from '../../../data/projects'

const segments = [
  'description',
  'technologies',
  'results'
]

const ProjectDetails = ({ project, closeProject }) => {
  const [activeSegment, setActiveSegment] = useState(segments[0]);

  return (
      <div className="h-full">
        <button onClick={ closeProject } onTouchEnd={ closeProject }>
          <FontAwesomeIcon icon={ faArrowLeft }/> Go back
        </button>

        <div className="h-full mt-4">
          <h1 className="text-3xl text-white font-bold">{ project.name }</h1>

          <div className="px-4 mt-2">

            <div className="flex justify-between">
              { segments.map((segment, index) => (
                  <button key={ index } onClick={ () => setActiveSegment(segment) }
                          className={ `text-white text-lg ${ activeSegment === segment ? 'underline decoration-2 decoration-color-accent' : 'opacity-50' }` }>
                    { segment.charAt(0).toUpperCase() + segment.slice(1) }
                  </button>
              )) }
            </div>

            <div className="mt-4">
              { activeSegment === 'description' && (
                  <Description description={ project.description.long }/>
              ) }

              { activeSegment === 'technologies' && (
                  <Technologies skills={ project.skills }/>

              ) }

              { activeSegment === 'results' && (
                  <p className="text-white">{ project.results }</p>
              ) }
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectDetails;