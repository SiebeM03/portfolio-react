import { useCallback, useState } from 'react'

const config = {
  scrollTimeout: 400,
}

const useScrollLock = () => {
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const lockScroll = useCallback(() => {
    setIsScrollLocked(true);

    // Lock scrolling for 400ms
    setTimeout(() => {
      setIsScrollLocked(false);
    }, config.scrollTimeout);
  }, [setIsScrollLocked]);

  return {
    isScrollLocked,
    lockScroll
  }
}

export default useScrollLock;