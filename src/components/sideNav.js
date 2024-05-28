import { useEffect, useState } from 'react'
import usePages from '../hooks/usePages'


// CSS: 742-829
const SideNav = ({ currentPath, setCurrentPath }) => {
  const { pages } = usePages();

  return (
      <nav className="flex h-full items-center
        before:content-[''] before:absolute before:top-1/2 before:left-0 before:translate-y-[-50%] before:w-0.5 before:h-[70%] before:max-h-side-nav before:bg-color-gray before:opacity-35 before:z-10">
        <ul about="side-nav"
            className="relative flex w-[100px] h-[70%] max-h-side-nav flex-col justify-around m-0 p-0 list-inside z-10">
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
          className={ `relative -top-[5px] text-[6px] cursor-pointer
                ${ page.before } before:absolute before:top-[3px] before:left-2.5 before:text-color-gray before:text-[14px] before:font-light
                ${ isActive ? 'after:absolute after:top-3 after:-left-[1px] after:transition-opacity after:opacity-100 after:duration-200 after:delay-100 after:rounded-full after:bg-color-accent after:w-1 after:h-1 after:text-[14px] after:font-light' : 'after:opacity-0' }
                ${ isActive ? 'text-color-accent transition-color ease-in-out duration-300 before:left-[-28px] before:text-white before:transition-all before:duration-300' : '' }` }>
              <span className={ `relative top-[3px] left-2.5 text-[14px] font-light text-white transition-opacity ease-in-out duration-300 delay-100
                    ${ isActive ? 'opacity-100 visible' : 'opacity-0 invisible' }` }>
                { page.name }
              </span>
      </li>
  );
}

export default SideNav;