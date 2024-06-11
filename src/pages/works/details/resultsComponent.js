import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import usePreventScroll from '../../../hooks/usePreventScroll'

const ResultsComponent = ({ results }) => {
  const [activeResult, setActiveResult] = useState(results[0]);

  const { textElement } = usePreventScroll();

  const handlePrevResult = () => {
    const currentIndex = results.indexOf(activeResult);
    const newIndex = currentIndex === 0 ? results.length - 1 : currentIndex - 1;
    setActiveResult(results[newIndex]);
  }
  const handleNextResult = () => {
    const currentIndex = results.indexOf(activeResult);
    const newIndex = currentIndex === results.length - 1 ? 0 : currentIndex + 1;
    setActiveResult(results[newIndex]);
  }

  return (
      <div className="relative h-full flex  flex-col items-center space-y-3">
        <div className="flex items-center min-w-72 justify-between space-x-5 select-none">
          <FontAwesomeIcon icon={ faArrowLeft } className="w-6 h-6 opacity-50 hover:opacity-100 duration-200"
                           onClick={ handlePrevResult } onTouchEnd={ handlePrevResult }/>
          <h2 className="text-xl font-bold">{ activeResult.title }</h2>
          <FontAwesomeIcon icon={ faArrowRight } className="w-6 h-6 opacity-50 hover:opacity-100 duration-200"
                           onClick={ handleNextResult } onTouchEnd={ handleNextResult }/>
        </div>

        <img src={ activeResult.image } alt={ activeResult.title } className="max-h-80 select-none object-contain"/>

        <p ref={ textElement } className="max-h-[20%] mb-40 overflow-y-auto">{ activeResult.description }</p>
      </div>
  )
}

export default ResultsComponent;