import './App.css';
import DefaultScreenLayout from './components/defaultScreenLayout'
import ScreenSize from './components/screenSize'
import usePages from './hooks/nav/usePages'
import MainSectionWrapper from './components/mainSectionWrapper'
import { useCallback, useEffect, useRef, useState } from 'react'
import useScroll from './hooks/nav/useScroll'
import useSwipe from './hooks/nav/useSwipe'
import ModalNav from './components/modalNav'

function App() {
  const containerRef = useRef()

  const [currentPath, setCurrentPath] = useState("/");
  const [previousPath, setPreviousPath] = useState(null);

  const [isModalView, setIsModalView] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);


  const { pages, getActivePage, getNextPage, getPreviousPage } = usePages(currentPath);

  const handlePathChange = useCallback((newPath) => {
    // If the new path is the same as the current path, do nothing
    if (newPath === currentPath) return;
    setPreviousPath(currentPath);
    setCurrentPath(newPath);

    if (isModalView || isAnimated) closeOuterNav();
  }, [currentPath, setCurrentPath, setPreviousPath, isModalView, isAnimated]);

  const handleNextPage = useCallback(() => handlePathChange(getNextPage().path), [handlePathChange, getNextPage]);
  const handlePreviousPage = useCallback(() => handlePathChange(getPreviousPage().path), [handlePathChange, getPreviousPage]);

  const { handleScroll } = useScroll(handleNextPage, handlePreviousPage);
  useSwipe(containerRef, handleNextPage, handlePreviousPage);


  const openOuterNav = (e) => {
    // Open the outer nav with animations
    e?.stopPropagation();
    setIsModalView(true);
    setTimeout(() => setIsAnimated(true), 25);
  }
  const closeOuterNav = (e) => {
    // Close the outer nav with animations
    e?.stopPropagation();
    setIsAnimated(false);
    setTimeout(() => setIsModalView(false), 400);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeOuterNav(e)
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
      <ModalNav isModalView={ isModalView } isAnimated={ isAnimated } currentPath={ currentPath }
                closeOuterNav={ closeOuterNav } handlePathChange={ handlePathChange }>
        <div onWheel={ handleScroll } ref={ containerRef }>
          {/*<ScreenSize/>*/}
          <DefaultScreenLayout currentPath={ currentPath } setCurrentPath={ handlePathChange }
                               openOuterNav={ openOuterNav }>
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
      </ModalNav>
  );
}

export default App;
