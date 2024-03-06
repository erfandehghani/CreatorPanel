const TableHeadItem = ({children}) => {
    return(
        <th scope="col" className="py-3.5 px-3 text-sm font-normal text-left rtl:text-right text-gray-500">
            <div class="flex items-center gap-x-2">
                <span>{children}</span>
            </div>
        </th>
    );
}
export default TableHeadItem;