const TableHead = ({children}) => {
    return (
        <thead className="p-8 bg-light-primary">
            {children}
        </thead>
    );
}

export default TableHead;