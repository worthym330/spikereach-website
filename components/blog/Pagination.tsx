"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // If we have fewer pages than the max to show, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always include first page
      pages.push(1)

      // Calculate start and end of page range
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're at the beginning or end
      if (currentPage <= 2) {
        end = 4
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      // Add ellipsis if needed
      if (start > 2) {
        pages.push(-1) // -1 represents ellipsis
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push(-2) // -2 represents ellipsis
      }

      // Always include last page
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav className="flex justify-center mt-12" aria-label="Pagination">
      <ul className="flex items-center space-x-2">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:pointer-events-none flex items-center"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Previous</span>
          </button>
        </li>

        {pageNumbers.map((pageNumber, index) => (
          <li key={index}>
            {pageNumber === -1 || pageNumber === -2 ? (
              <span className="px-3 py-2">...</span>
            ) : (
              <button
                onClick={() => onPageChange(pageNumber)}
                className={`px-3 py-2 rounded-md ${
                  pageNumber === currentPage
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                aria-current={pageNumber === currentPage ? "page" : undefined}
              >
                {pageNumber}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:pointer-events-none flex items-center"
            aria-label="Next page"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination

