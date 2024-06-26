import { useState } from 'react'
import usePreventScroll from '../../hooks/usePreventScroll'

const ProjectCard = ({ project, openProject }) => {
  const [startY, setStartY] = useState(0)

  // Handle touch events to prevent scrolling the page when the user is tapping the project cards
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY)
  }
  const handleTouchEnd = (e) => {
    e.preventDefault()

    const endY = e.changedTouches[0].clientY
    const deltaY = endY - startY

    // swipe distance is too long -> don't open the project since the user is scrolling
    if (Math.abs(deltaY) > 20) return;
    openProject(project)
  }

  const { textElement } = usePreventScroll()

  return (
      <div className="p-2" onClick={ () => openProject(project) }
           onTouchStart={ handleTouchStart }
           onTouchEnd={ handleTouchEnd }>
        <div
            className="flex flex-col h-full bg-color-background-400 hover:bg-color-background-200 duration-200 border-2 border-color-background-300 rounded-lg p-4 cursor-pointer">
          <h2 className="text-xl font-bold text-white">{ project.name }</h2>
          <p className="text-white my-4 grow overflow-y-auto" ref={ textElement }>{ project.description.short }</p>

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