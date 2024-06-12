import usePreventScroll from '../../../hooks/usePreventScroll'

const Description = ({ description }) => {
  const { textElement } = usePreventScroll();
  return (
      <div ref={ textElement } className="mt-4 h-[calc(100%-270px)] overflow-y-auto">
        { description }
      </div>
  )
}

export default Description;