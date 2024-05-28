import './App.css';
import DefaultScreenLayout from './components/defaultScreenLayout'
import ScreenSize from './components/screenSize'
import usePages from './hooks/nav/usePages'
import MainSectionWrapper from './components/mainSectionWrapper'
import { useCallback, useEffect, useRef, useState } from 'react'
import useScroll from './hooks/nav/useScroll'
import useSwipe from './hooks/nav/useSwipe'

function App() {
  const containerRef = useRef()

  const [currentPath, setCurrentPath] = useState("/");
  const [previousPath, setPreviousPath] = useState(null);

  const { pages, getActivePage, getNextPage, getPreviousPage } = usePages(currentPath);

  const handlePathChange = useCallback((newPath) => {
    setPreviousPath(currentPath);
    setCurrentPath(newPath);
  }, [currentPath, setCurrentPath, setPreviousPath]);

  const handleNextPage = useCallback(() => handlePathChange(getNextPage().path), [handlePathChange, getNextPage]);
  const handlePreviousPage = useCallback(() => handlePathChange(getPreviousPage().path), [handlePathChange, getPreviousPage]);

  const { handleScroll } = useScroll(handleNextPage, handlePreviousPage);
  const { handleTouchStart } = useSwipe(containerRef, handleNextPage, handlePreviousPage);

  return (
      <div about="container" onWheel={ handleScroll } ref={ containerRef }
           className="relative min-h-full outline-[30px] outline-color-accent transition duration-300">
        <ScreenSize/>
        <DefaultScreenLayout currentPath={ currentPath } setCurrentPath={ handlePathChange }>
          { pages.map((page, index) => {
            const isActive = page.path === getActivePage().path;
            const isPreviousPath = page.path === previousPath;

            const currentPageIndex = pages.findIndex(page => page.path === currentPath);
            const previousPageIndex = pages.findIndex(page => page.path === previousPath);

            return <MainSectionWrapper key={ page.path } isActive={ isActive }
                                       sectionClass={ isPreviousPath ? currentPageIndex > previousPageIndex ? "section-next" : "section-prev" : "" }>
              { page.component }
            </MainSectionWrapper>
          }) }
        </DefaultScreenLayout>
      </div>
  );
}

export default App;
