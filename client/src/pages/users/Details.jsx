import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../users/Details.scss";

function GetUserById(user,error){
  const { id } = useParams();
  useEffect(() => {
    fetch(process.env.REACT_APP_REQUEST + id)
    .then(res => {
      if(!res.ok) {
        error(true)
      }
      return res.json()
    })
    .then(data => {
      user(data)
    })
  }, []);
  
}

function Details() {
  
  const [user,setUser] = useState("")
  const [error,setError] = useState(false)

  GetUserById(setUser,setError)

    return (
      <>
        {
          error === true ? <p>user was not found</p> : 
          <div className="details-container">
          <div className="d-img-container">
            <img src={user.avatar} alt="" />
          </div>
          <div className="d-info">
            <div className="d-title">
              <h1>{user.userName}</h1>
              <p>ID: {user.id}</p>
            </div>
            <div className="d-content">
              <p>Email: {user.email}</p>
              <p>Phone: {user.phoneNumber}</p>
            </div>
          </div>
        </div>
        }
      </>
    )
}


export default Details;


