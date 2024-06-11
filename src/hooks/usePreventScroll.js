import { useEffect, useRef } from 'react'

const usePreventScroll = () => {
  const textElement = useRef()

  const preventScrollIfOverflowing = (e) => {
    if (textElement.current.scrollHeight > textElement.current.clientHeight) e.stopPropagation()
  };

  useEffect(() => {
    const element = textElement.current;
    if (!element) return;

    element.addEventListener('touchstart', preventScrollIfOverflowing);
    element.addEventListener('touchmove', preventScrollIfOverflowing);
    element.addEventListener('touchend', preventScrollIfOverflowing);
    element.addEventListener('wheel', preventScrollIfOverflowing);

    return () => {
      if (element) {
        element.removeEventListener('touchstart', preventScrollIfOverflowing);
        element.removeEventListener('touchmove', preventScrollIfOverflowing);
        element.removeEventListener('touchend', preventScrollIfOverflowing);
        element.removeEventListener('wheel', preventScrollIfOverflowing);
      }
    };
  }, []);

  return { textElement };
}

export default usePreventScroll;