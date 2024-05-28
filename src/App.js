import './App.css';
import DefaultScreenLayout from './components/defaultScreenLayout'
import ScreenSize from './components/screenSize'
import usePages from './hooks/usePages'
import MainSectionWrapper from './components/mainSectionWrapper'
import { useEffect, useState } from 'react'

function App() {
  const [currentPath, setCurrentPath] = useState("/");
  const [previousPath, setPreviousPath] = useState(null);


  const [isScrollLocked, setIsScrollLocked] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPath, isScrollLocked]);


  const { pages, getActivePage, getNextPageIndex, getPreviousPageIndex } = usePages(currentPath);

  const handlePathChange = (newPath) => {
    setPreviousPath(currentPath);
    setCurrentPath(newPath);
  }


  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      // scroll down -> next page
      handlePathChange(pages[getNextPageIndex()].path);
    } else {
      // scroll up -> previous page
      handlePathChange(pages[getPreviousPageIndex()].path);
    }
    setIsScrollLocked(true);

    // Lock scrolling for 2 seconds (2000 milliseconds)
    setTimeout(() => {
      setIsScrollLocked(false);
    }, 400);
  }

  return (
      <div about="container" onWheel={ isScrollLocked ? null : handleScroll }
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
