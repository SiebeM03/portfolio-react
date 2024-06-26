import { useEffect, useState } from 'react'

const defaultTheme = require('tailwindcss/defaultTheme');
const breakpoints = defaultTheme.screens;

const useBreakpoints = () => {
  const getActiveBreakpoint = () => {
    const width = window.innerWidth;

    if (width >= parseInt(breakpoints['2xl'])) return '2xl';
    if (width >= parseInt(breakpoints.xl)) return 'xl';
    if (width >= parseInt(breakpoints.lg)) return 'lg';
    if (width >= parseInt(breakpoints.md)) return 'md';
    if (width >= parseInt(breakpoints.sm)) return 'sm';
    return 'xs';
  }

  const [activeBreakpoint, setActiveBreakpoint] = useState(getActiveBreakpoint())


  useEffect(() => {
    const handleResize = () => setActiveBreakpoint(getActiveBreakpoint());

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    }
  }, []);

  return {
    activeBreakpoint,
  };
}

export default useBreakpoints;