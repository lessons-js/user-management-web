import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Details() {

  const [user,setUser] = useState("")
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3001/users/getUserById/${id}`)
    .then(res => {
      if(!res.ok) {
        navigate('/users')
      } 
      return res.json()
    })
    .then(data => {
      setUser(data)
    })
  }, []);
  

  return(
    <div className="Wrapper">
      <div>{user.userName}</div>
    </div>
  )
}


export default Details;


