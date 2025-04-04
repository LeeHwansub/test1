import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function ListCom({ data, loading, error, currentPage, totalPages, itemsPerPage, onPageChange, onPageSizeChange }) {
    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3>{error}</h3>;

    return (
        <>
            <h1>회원목록</h1>

            <div>
                페이지당 보기: 
                <select value={itemsPerPage} onChange={e => onPageSizeChange(Number(e.target.value))}>
                    <option value="10">10명</option>
                    <option value="20">20명</option>
                    <option value="50">50명</option>
                </select>
            </div>

            <table border="1" width="80%" align="center">
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td><Link to={`/member/one?id=${d.id}`}>{d.name}</Link></td>
                            <td>{d.addr}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </>
    );
}

export default ListCom;
