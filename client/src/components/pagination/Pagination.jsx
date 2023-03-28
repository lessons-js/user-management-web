import { useState } from 'react';

export const Pagination = (props) => {
    const [pageNumber, setPageNumber] = useState(0);
    const pageSize = 1;

    function onChange(changes) {
        if (props.onChange) {
            props.onChange(changes);
        }
    }

    const next =  () => {
        const nextPageNumber = pageNumber + 1;
        setPageNumber(nextPageNumber);
        onChange({ pageNumber: nextPageNumber, pageSize });
    }
    
    const prev = () => {
        if (pageNumber > 0) {
            const nextPageNumber = pageNumber - 1;
            setPageNumber(pageNumber - 1);
            onChange({ pageNumber: nextPageNumber, pageSize });
        }
    }

    return (
        <>
            {/* <select>
                <option>10</option>
                <option>15</option>
                <option>20</option>
            </select> */}
            <div className="pages" value={pageNumber}>{pageNumber}</div>
            <div className="arrNext" onClick={next}>next</div>
            <div className="arrBack" onClick={prev}>back</div>
            {/* <div className='posts'>1 - {posts.length}</div> */}
        </>
    )
}
