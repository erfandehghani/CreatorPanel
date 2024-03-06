const TableHead = ({children}) => {
    return (
        <thead className="p-8 bg-primary">
            {children}
        </thead>
    );
}

export default TableHead;