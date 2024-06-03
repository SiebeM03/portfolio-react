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
    if (newPath === currentPath) return;
    setPreviousPath(currentPath);
    setCurrentPath(newPath);
  }, [currentPath, setCurrentPath, setPreviousPath]);

  const handleNextPage = useCallback(() => handlePathChange(getNextPage().path), [handlePathChange, getNextPage]);
  const handlePreviousPage = useCallback(() => handlePathChange(getPreviousPage().path), [handlePathChange, getPreviousPage]);

  const { handleScroll } = useScroll(handleNextPage, handlePreviousPage);
  useSwipe(containerRef, handleNextPage, handlePreviousPage);


  const [isModalView, setIsModalView] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const openOuterNav = (e) => {
    e?.stopPropagation();
    setIsModalView(true);
    setTimeout(() => setIsAnimated(true), 25);
  }
  const closeOuterNav = (e) => {
    console.log('closeOuterNav')
    e.stopPropagation();
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
      <div
          className={ `perspective effect-rotate-left ${ isModalView ? 'perspective--modalview' : '' } ${ isAnimated ? 'effect-rotate-left--animate' : '' }` }>
        { (isModalView || isAnimated) &&
          // Modal return overlay
          <div className="container-div w-full z-20 absolute min-h-full" onClick={ closeOuterNav } onTouchEnd={ closeOuterNav }/>
        }

        <div about="container" onWheel={ handleScroll } ref={ containerRef }
             className="container-div relative min-h-full outline outline-[30px] outline-color-accent">
          <ScreenSize/>
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

        <ul className={ `outer-nav m-0 p-0 list-none text-center ${ isModalView && isAnimated ? 'is-vis' : '' }` }>
          { pages.map((page, index) => {
            const isActive = page.path === getActivePage().path;
            return <li key={ page.path }
                       style={ isModalView && isAnimated ? { transitionDelay: `${ index * 0.04 }s` } : {} }
                       className={ `text-5xl font-bold cursor-pointer ${ isModalView && isAnimated ? 'is-vis' : 'opacity-0' } ${ isActive ? 'is-active' : '' }` }>
              <button className="w-full" onClick={ () => handlePathChange(page.path) }
                      onTouchEnd={ () => handlePathChange(page.path) }>{ page.name }</button>
            </li>
          }) }
        </ul>
      </div>
  );
}

export default App;
