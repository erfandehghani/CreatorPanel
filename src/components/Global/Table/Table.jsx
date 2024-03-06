const Table = ({children}) => {

    return(
        <div class="flex flex-col flex-grow pt-3">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden border border-gray-200  md:rounded-lg">
                        <table class="min-w-full">
                            {children}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Table;