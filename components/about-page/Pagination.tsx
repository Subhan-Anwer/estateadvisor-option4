"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center gap-2 mt-12"
    >
      {/* Previous Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-[#0c2625] hover:text-white hover:border-[#0c2625] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-300 transition-all duration-300"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </motion.button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {getPageNumbers().map((pageNumber, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: pageNumber !== "..." ? 1.1 : 1 }}
            whileTap={{ scale: pageNumber !== "..." ? 0.9 : 1 }}
            onClick={() =>
              typeof pageNumber === "number"
                ? onPageChange(pageNumber)
                : undefined
            }
            disabled={pageNumber === "..."}
            className={`
              w-10 h-10 rounded-lg font-semibold transition-all duration-300
              ${
                pageNumber === currentPage
                  ? "bg-[#0c2625] text-white border-[#0c2625]"
                  : pageNumber === "..."
                  ? "text-gray-500 cursor-default"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37]"
              }
            `}
          >
            {pageNumber}
          </motion.button>
        ))}
      </div>

      {/* Next Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-[#0c2625] hover:text-white hover:border-[#0c2625] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-300 transition-all duration-300"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}
