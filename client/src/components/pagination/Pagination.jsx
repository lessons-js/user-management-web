import { useState } from 'react';

export const Pagination = (props) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(0);
    const tp = Math.trunc(props.itemsCount / pageSize);

    


    function onChange(changes) {
        if (props.onChange) {
            props.onChange(changes);
        }
    }
    
    const totalNumber = (event) => {
        setPageSize(Number(event.target.value));
        onChange({pageSize: event.target.value})
    }
    const next =  () => {
        if(tp !== pageNumber + 1) {
            const nextPageNumber = pageNumber + 1;
            setPageNumber(nextPageNumber);
            onChange({ pageNumber: nextPageNumber, pageSize: pageSize });
        }
    }
    
    const prev = () => {
        if (pageNumber > 0) {
            const nextPageNumber = pageNumber - 1;
            setPageNumber(nextPageNumber);
            onChange({ pageNumber: nextPageNumber, pageSize: pageSize });
        }
    }

    return (
        <>
            <select onChange={totalNumber}>
                {props.pageSizes.map((page) => (
                    <option key={page}>{page}</option>
                ))}
            </select>
            <div className="arrNext" onClick={next}>next</div>
            <div className="arrPrev" onClick={prev}>back</div>
            <div className='items'>{pageNumber + 1} - {tp}</div>
        </>
    )
}
