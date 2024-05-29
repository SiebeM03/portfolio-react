import { useCallback } from 'react'
import useScrollLock from './useScrollLock'

const useScroll = (handleNextPage, handlePreviousPage) => {
  const { isScrollLocked, lockScroll } = useScrollLock();

  const handleScroll = useCallback((e) => {
    if (isScrollLocked) return;

    // scroll down -> next page
    if (e.deltaY > 0) handleNextPage()
    // scroll up -> previous page
    else handlePreviousPage()

    lockScroll();
  }, [handleNextPage, handlePreviousPage, isScrollLocked, lockScroll])


  return {
    handleScroll
  }
}

export default useScroll;