import usePreventScroll from '../../../hooks/usePreventScroll'

const Description = ({ description, isActive, heightClass }) => {
  const { textElement } = usePreventScroll(isActive);
  return (
      <div ref={ textElement } className={ `mt-4 ${ heightClass } overflow-y-auto` }>
        { description }
      </div>
  )
}

export default Description;