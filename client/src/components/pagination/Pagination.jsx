import { useState, useEffect } from 'react';

const BASIC_URL = 'http://localhost:3001/users';



export const Pagination = (props) => {
    const [posts, setPosts] = useState([]);
    const [pageQty, setPageQty] = useState(0);
    const [pageSizes, setPageSizes] = useState(1)
    const query = {
            pageSize : Number,
            pageIndex: Number,
            total: Number,
            };
    
    useEffect(() => {
        query.pageSize = pageSizes;
        query.pageIndex = pageQty;
        fetch(BASIC_URL)
        .then()
        .then(responce => {
            const res = responce;
        })
    }, [query])
    const pageSize = (event) => {
        setPageSizes(Number(event.target.value))
        fetchPost(query)
    }
    const next =  () => {
        setPageQty(pageQty + 1)
        fetchPost(query)
        props.onChange(posts)
    }
    
    const pref = () => {
        if (pageQty > 0) {
            setPageQty(pageQty - 1)
            fetchPost(query)
        }
        props.onChange(posts) 
    }

    function fetchPost (data) {
        fetch(BASIC_URL, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(responce => {
            const res = responce;
            console.log('res',res)
        })
    }

    return (
        <>
            <select onChange={pageSize}>
                <option>10</option>
                <option>15</option>
                <option>20</option>
            </select>
            <div className="pages" value={pageQty}>{pageQty}</div>
            <div className="arrNext" onClick={next}>next</div>
            <div className="arrBack" onClick={pref}>back</div>
            <div className='posts'>1 - {posts.length}</div>
        </>
    )
}
