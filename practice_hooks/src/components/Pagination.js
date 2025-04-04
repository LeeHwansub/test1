function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div style={{ marginTop: "20px" }}>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => onPageChange(i + 1)}
                    style={{
                        margin: '0 5px',
                        backgroundColor: currentPage === i + 1 ? 'lightblue' : 'white'
                    }}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}
export default Pagination;
