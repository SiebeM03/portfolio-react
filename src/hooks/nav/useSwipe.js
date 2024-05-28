import { useCallback, useEffect, useState } from 'react'
import useScrollLock from './useScrollLock'

const config = {
  minimumSwipeDistance: 20,
}

const useSwipe = (wrapperRef, handleNextPage, handlePreviousPage) => {
  const { isScrollLocked, lockScroll } = useScrollLock();

  const [startY, setStartY] = useState(0)

  const handleTouchStart = useCallback((e) => {
    if (!wrapperRef.current.contains(e.target)) return
    e.preventDefault()

    setStartY(e.touches[0].clientY)
  }, [wrapperRef])

  const handleTouchEnd = useCallback((e) => {
    if (!wrapperRef.current.contains(e.target)) return
    e.preventDefault()
    if (isScrollLocked) return

    const endY = e.changedTouches[0].clientY
    const deltaY = endY - startY

    // swipe distance is too short -> do nothing
    if (Math.abs(deltaY) < config.minimumSwipeDistance) return
    // swipe down -> previous page
    if (deltaY > 0) handlePreviousPage()
    // swipe up -> next page
    if (deltaY < 0) handleNextPage()

    lockScroll()
  }, [wrapperRef, isScrollLocked, startY, lockScroll, handlePreviousPage, handleNextPage])

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchend", handleTouchEnd, { passive: false })

    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [handleTouchStart, handleTouchEnd])

  return {
    handleTouchStart,
    handleTouchEnd
  }
}

export default useSwipe;