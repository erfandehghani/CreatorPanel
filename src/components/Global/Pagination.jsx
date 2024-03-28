import { NavLink } from "react-router-dom";

function Pagination({ prePage, numbers, changePage, nextPage }) {
  return (
    <div className="w-full pt-3">
      <ul className="flex justify-around">
        <li>
          <NavLink to="" className="text-sm" onClick={() => prePage()}>
            قبلی
          </NavLink>
        </li>
        {numbers.map((number, i) => (
          <li key={i} className="bg-[#dbeafe99] p-1 px-2 rounded-md">
            <NavLink
              to=""
              className="text-sm text-blue-secondary"
              onClick={() => changePage(number)}
            >
              {number}
            </NavLink>
          </li>
        ))}
        <li>
          <button className="border p-2 ">
            <NavLink to="" className="text-sm" onClick={() => nextPage()}>
              بعدی
            </NavLink>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
