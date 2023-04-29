import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {

  const [user,setUser] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/users/getUserById/${id}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setUser(data)
    })
  }, [id]);

  return(
    <div className="Wrapper">
      <div>{user.userName}</div>
    </div>
  )
}


export default Details;
