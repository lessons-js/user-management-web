import {useEffect, useState} from 'react'



function delUser(users, id) {
  let str = [];

  for(const a of users) {
    if (a.id !== id)
      str.push(a);
  }
  return str;
}

export const DeleteUsers = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        let newArr = [];
      fetch('http://localhost:3001/users',{
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        newArr = delUser(data.result, 2) // 2 is id user which we want to del
        setUsers(newArr);
      })
    },[]);
  return (
    <>
      {
      users?.map(h => <p key={h.id}> 
      [id] - {h.id}
      [name] - {h.userName}
      [email] - {h.email}
      [phoneNumber] - {h.phoneNumber}</p>)
    }
    </>
  )
  }