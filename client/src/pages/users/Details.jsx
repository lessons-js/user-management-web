import { useParams } from "react-router-dom";


function Details() {
    const {id} = useParams()
    return(
        <h2>hello {id}</h2>
    )
}

export default Details;
