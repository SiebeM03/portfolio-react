import { useEffect, useState } from 'react'
import usePages from '../hooks/nav/usePages'


// CSS: 742-829
const SideNav = ({ currentPath, setCurrentPath }) => {
  const { pages } = usePages();

  return (
      <nav
          className="side-nav flex h-full items-center before:bg-color-gray before:opacity-35 before:z-10 before:h-7/10 before:max-h-side-nav">
        <ul className="relative flex w-[100px] h-7/10 max-h-side-nav flex-col justify-around m-0 p-0 list-inside z-10">
          { pages.map((page, index) => <NavItem key={ index } page={ page } currentPath={ currentPath }
                                                setCurrentPath={ setCurrentPath }/>) }
        </ul>
      </nav>);
}

const NavItem = ({ page, currentPath, setCurrentPath }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(currentPath === page.path);
  }, [currentPath, page.path]);

  return (
      <li onClick={ () => setCurrentPath(page.path) }
          className={ `relative -top-[5px] text-[6px] cursor-pointer ${ isActive ? 'active before:text-white after:bg-color-accent' : 'before:text-color-gray after:bg-color-gray' }` }>
              <span
                  className={ `relative left-2.5 text-[14px] font-light text-white transition-opacity ease-in-out duration-700 delay-100` }>
                { page.name }
              </span>
      </li>
  );
}

export default SideNav;