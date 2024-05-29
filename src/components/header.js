const Header = ({ setCurrentPath, openOuterNav }) => {
  return (
      <header className="flex w-full h-[70px] items-center justify-between z-10">
        <button onClick={ () => setCurrentPath("/") } onTouchEnd={ () => setCurrentPath("/") }
                className="pl-2.5 text-base font-bold uppercase">Siebe Michiels
        </button>
        <div about="header--nav-toggle" onClick={ openOuterNav } onTouchEnd={ openOuterNav } className="flex w-12 h-12 flex-col items-center justify-center cursor-pointer
          before:content-[''] before:relative before:w-6 before:h-0.5 before:bg-color-text before:bottom-1.5
          after:content-['']   after:relative  after:w-6  after:h-0.5  after:bg-color-text  after:top-1.5">
          <span className="content-[''] relative w-4 h-0.5 bg-color-text"></span>
        </div>
      </header>
  );
}

export default Header;