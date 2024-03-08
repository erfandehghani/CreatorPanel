const TableBodyItem = ({children}) => {

    return(
        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div class="inline-flex items-center gap-x-3">
                <div class="flex items-center gap-x-2">
                    <span class="font-medium text-gray-800">{children}</span>
                </div>
            </div>
        </td>
    );
}

export default TableBodyItem;