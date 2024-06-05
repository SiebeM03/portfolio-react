import usePages from '../hooks/nav/usePages'

// This is the navigation menu that shows up when the user clicks the hamburger icon in the top right corner of the screen.
const ModalNav = ({ children, currentPath, isModalView, isAnimated, closeOuterNav, handlePathChange }) => {
  const { getActivePage, pages } = usePages(currentPath);

  return (
      <div
          className={ `perspective effect-rotate-left ${ isModalView ? 'perspective--modalview' : '' } ${ isAnimated ? 'effect-rotate-left--animate' : '' }` }>
        { (isModalView || isAnimated) &&
            // Modal return overlay
            <div className="container-div w-full z-20 absolute min-h-full" onClick={ closeOuterNav }
                 onTouchEnd={ closeOuterNav }/>
        }

        { children }

        <ul className={ `outer-nav m-0 p-0 list-none ${ isModalView && isAnimated ? 'is-vis' : '' } right-[10%]` }>
          { pages.map((page, index) => {
            const isActive = page.path === getActivePage().path;
            return <li key={ page.path }
                       style={ isModalView && isAnimated ? { transitionDelay: `${ index * 0.04 }s` } : {} }
                       className={ `font-bold text-2xl sm:text-5xl cursor-pointer ${ isModalView && isAnimated ? 'is-vis' : 'opacity-0' } ${ isActive ? 'is-active' : '' }` }>
              <button className="w-full"
                      onClick={ () => handlePathChange(page.path) } onTouchEnd={ () => handlePathChange(page.path) }>
                { page.name }
              </button>
            </li>
          }) }
        </ul>
      </div>
  );
}

export default ModalNav;