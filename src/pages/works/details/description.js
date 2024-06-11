import usePreventScroll from '../../../hooks/usePreventScroll'

const Description = ({ description }) => {
  const { textElement } = usePreventScroll();
  return (
      <p className="pr-4 project-description text-white overflow-y-auto pb-4" ref={ textElement }>
        { description }
      </p>
  )
}

export default Description;