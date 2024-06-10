import { useState } from 'react'

const usePagination = (items, itemsPerPage) => {
  const [activePage, setActivePage] = useState(1);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const getPaginatedItems = () => {
    const start = (activePage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  }

  const handlePrevPage = () => {
    if (activePage === 1) return;
    setActivePage(prev => prev - 1);
  }
  const handleNextPage = () => {
    if (activePage === pageCount) return;
    setActivePage(prev => prev + 1);
  }


  return {
    activePage,
    setActivePage,
    pageCount,

    handlePrevPage,
    handleNextPage,
    getPaginatedItems
  }
}

export default usePagination;