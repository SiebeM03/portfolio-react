import Header from './header'
import SideNav from './sideNav'

const DefaultScreenLayout = ({ children, currentPath, setCurrentPath, openOuterNav }) => {
  return (
      <div about="l-viewport" className="relative w-full h-screen">
        <div about="l-wrapper" className="flex flex-col relative w-[1440px] max-w-[90%] h-screen mx-auto box-content">
          <Header setCurrentPath={ setCurrentPath } openOuterNav={ openOuterNav }/>
          <div className="flex flex-1">
            <SideNav currentPath={ currentPath } setCurrentPath={ setCurrentPath }/>
            <main className="w-full h-full">
              <ul about="main-content"
                  className="relative w-full h-full m-0 p-0 list-none">
                { children }
              </ul>
            </main>
          </div>
        </div>
      </div>
  );
}

export default DefaultScreenLayout;