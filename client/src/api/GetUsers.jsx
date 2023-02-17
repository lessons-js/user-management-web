import {useEffect, useState} from 'react'

export const GetUsers = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.result);
        console.log(data);
      })
    },[]);
  return (
    <>
      {
      users?.map(h => <p key={h.userName}> 
      [id] - {h.id}      
      [name] - {h.userName}     
      [email] - {h.email}       
      [phoneNumber] - {h.phoneNumber}</p>)
    }
    </>
  )
  }


