import Home from '../../pages/home'
import Works from '../../pages/works'
import About from '../../pages/about'
import Contact from '../../pages/contact'

const usePages = (currentPath) => {
  const pages = [
    {
      name: 'Home',
      component: <Home/>,
      path: '/',
    },
    {
      name: 'Works',
      component: <Works/>,
      path: '/works',
    },
    {
      name: 'Internship',
      component: <div>Internship</div>,
      path: '/internship',
    },
    {
      name: 'About',
      component: <About/>,
      path: '/about',
    },
    {
      name: 'Contact',
      component: <Contact/>,
      path: '/contact',
    }
  ]

  const getActivePage = () => pages.find(page => page.path === currentPath)

  const getNextPage = () => {
    const currentPageIndex = pages.findIndex(page => page.path === currentPath);
    return pages[currentPageIndex === pages.length - 1 ? 0 : currentPageIndex + 1];
  }

  const getPreviousPage = () => {
    const currentPageIndex = pages.findIndex(page => page.path === currentPath);
    return pages[currentPageIndex === 0 ? pages.length - 1 : currentPageIndex - 1];
  }

  return {
    pages,
    getActivePage,
    getNextPage,
    getPreviousPage
  }
}

export default usePages;