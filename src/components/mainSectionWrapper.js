import { cloneElement } from 'react'

const MainSectionWrapper = ({ children, isActive, sectionClass }) => {

  return (
      <li className={ `absolute w-full h-full section ${ isActive ? 'section-active' : '' }` }>
        <div className={ `relative h-full ${ sectionClass }` }>
          { cloneElement(children, { isActive }) }
        </div>
      </li>
  )
}

export default MainSectionWrapper;