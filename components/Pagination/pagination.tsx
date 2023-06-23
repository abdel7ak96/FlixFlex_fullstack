const Pagination = ({ page, setPage }: { page: number; setPage: Function }) => (
  <div className="flex justify-center mb-10">
    <nav>
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            onClick={() => setPage(page - 1)}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </button>
        </li>
        {page > 2 && (
          <li>
            <button
              onClick={() => setPage(page - 2)}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
            >
              {page - 2}
            </button>
          </li>
        )}
        {page > 1 && (
          <li>
            <button
              onClick={() => setPage(page - 1)}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
            >
              {page - 1}
            </button>
          </li>
        )}
        <li>
          <button className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-70">
            {page}
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(page + 1)}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
          >
            {page + 1}
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(page + 2)}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  "
          >
            {page + 2}
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(page + 1)}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700  "
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
);

export default Pagination;
