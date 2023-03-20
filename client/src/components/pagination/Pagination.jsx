import DBPagination from '../../../../server/src/services/db/db.pagination';
import { useState, useEffect } from 'react';

const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('react');
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);

    useEffect(() => {
        DBPagination(query)
    }, [query, page])

    return (
        <pagitaion>
            <input type="text" />
            <div className="pages"></div>
            <div className="arrNext"></div>
            <div className="arrBack"></div>
        </pagitaion>
    )
}