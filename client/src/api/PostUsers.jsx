import {useEffect, useState} from 'react'

const newUser  = {
    id: 4,
    userName: 'Orion',
    email: 'Orion@ukr.net',
    phoneNumber: '+380935954144'
  }

  

export const PostUsers = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {    
      const str = [];
  
      fetch('http://localhost:3001/users',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        for(const a of data.result) {
            str.push(a);
        }
        str.push(newUser);
        setUsers(str);
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