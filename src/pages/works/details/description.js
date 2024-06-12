import usePreventScroll from '../../../hooks/usePreventScroll'

const Description = ({ description }) => {
  const { textElement } = usePreventScroll();
  return (
      <p className="project-description text-white overflow-y-auto pr-4 pb-4" ref={ textElement }>
        { description }
      </p>
  )
}

export default Description;