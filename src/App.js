import './App.css';
import DefaultScreenLayout from './components/defaultScreenLayout'
import ScreenSize from './components/screenSize'
import usePages from './hooks/usePages'
import MainSectionWrapper from './components/mainSectionWrapper'
import { useState } from 'react'

function App() {
  const [currentPath, setCurrentPath] = useState("/");
  const [previousPath, setPreviousPath] = useState(null);

  const { pages, activePage } = usePages(currentPath);

  const handlePathChange = (newPath) => {
    setPreviousPath(currentPath);
    setCurrentPath(newPath);
  }

  console.log("=============")
  console.log("currentPath", currentPath)
  console.log("previousPath", previousPath)

  return (
      <div about="container"
           className="relative min-h-full outline-[30px] outline-color-accent transition duration-300">
        <ScreenSize/>
        <DefaultScreenLayout currentPath={ currentPath } setCurrentPath={ handlePathChange }>
          { pages.map((page, index) => {
            const isActive = page.path === activePage.path;
            const isPreviousPath = page.path === previousPath;

            const currentPageIndex = pages.findIndex(page => page.path === currentPath);
            const previousPageIndex = pages.findIndex(page => page.path === previousPath);

            return <MainSectionWrapper isActive={ isActive }
                                       sectionClass={ isPreviousPath ? currentPageIndex > previousPageIndex ? "section-next" : "section-prev" : "" }>
              { page.component }
            </MainSectionWrapper>
          }) }
        </DefaultScreenLayout>
      </div>
  );
}

export default App;
