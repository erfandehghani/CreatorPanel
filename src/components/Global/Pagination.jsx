import { NavLink } from "react-router-dom";

function Pagination({ prePage, numbers, changePage, nextPage }) {
  return (
    <div className="w-full flex justify-between items-center pt-3">
      <NavLink
        to=""
        className="text-sm border py-2 px-5  rounded-md text-grey-700 transition-colors duration-200 hover:bg-gray-100"
        onClick={() => prePage()}
      >
        قبلی
      </NavLink>
      {numbers.map((number, i) => (
        <div key={i} className="bg-[#dbeafe99] py-1 px-2 rounded-md">
          <NavLink
            to=""
            className="text-sm text-blue-secondary"
            onClick={() => changePage(number)}
          >
            {number}
          </NavLink>
        </div>
      ))}
      <NavLink
        to=""
        className="text-sm border py-2 px-5  rounded-md text-grey-700 transition-colors duration-200 hover:bg-gray-100"
        onClick={() => nextPage()}
      >
        بعدی
      </NavLink>
    </div>
  );
}

export default Pagination;
