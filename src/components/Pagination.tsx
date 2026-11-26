import "../css/components/pagination.css"

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({currentPage, totalPages, onPageChange}: PaginationProps) {
    if (totalPages <= 1) return null;
    return (
        <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            {Array.from({length: totalPages}, (_, index) => {
                const page = index + 1;
                return (<button key={page} className={currentPage === page ? "active" : ""}
                                onClick={() => onPageChange(page)}>{page}</button>);
            })}
            <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}><i
                className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
}