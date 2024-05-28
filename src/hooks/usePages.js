import Home from '../pages/home'
import Works from '../pages/works'
import About from '../pages/about'
import Contact from '../pages/contact'

const usePages = (currentPath) => {
  const pages = [
    {
      name: 'Home',
      component: <Home/>,
      path: '/',
      before: 'before:content-["01"]'
    },
    {
      name: 'Works',
      component: <Works/>,
      path: '/works',
      before: 'before:content-["02"]'
    },
    {
      name: 'Internship',
      component: <div>Internship</div>,
      path: '/internship',
      before: 'before:content-["03"]'
    },
    {
      name: 'About',
      component: <About/>,
      path: '/about',
      before: 'before:content-["04"]'
    },
    {
      name: 'Contact',
      component: <Contact/>,
      path: '/contact',
      before: 'before:content-["05"]'
    }
  ]

  const getActivePage = () => pages.find(page => page.path === currentPath)

  const getNextPageIndex = () => {
    const currentPageIndex = pages.findIndex(page => page.path === currentPath);
    return currentPageIndex === pages.length - 1 ? 0 : currentPageIndex + 1;
  }

  const getPreviousPageIndex = () => {
    const currentPageIndex = pages.findIndex(page => page.path === currentPath);
    return currentPageIndex === 0 ? pages.length - 1 : currentPageIndex - 1;
  }

  return {
    pages,
    getActivePage,
    getNextPageIndex,
    getPreviousPageIndex
  }
}

export default usePages;