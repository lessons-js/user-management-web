import { useParams } from "react-router-dom";

function Details() {
    const { id } = useParams()
    const selectedUser = "";
    fetch(`localhost:3001/users/${id}`),{ method: 'POST', headers: { 'content-type': 'application/json' }}.then(res => res.json()).then(res => {
        selectedUser(res.currentUser)
      })
}

export default Details;
