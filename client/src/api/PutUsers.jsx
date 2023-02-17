import {useEffect, useState} from 'react'


function putUser(users, id, changeParam) {
    let str = [];

    for(const a of users) {
      if (a.id === id) {
        a.userName = changeParam;
      }
      str.push(a);
    }
    return str;
}

function retFunc(users){
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

export const PutUsers = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        let newArr = [];
      fetch('http://localhost:3001/users',{
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        newArr = putUser(data.result, 2, 'Alex');
        setUsers(newArr);
       // console.log(makeArrObj(users));
      })
    },[]);
  return (
     retFunc(users)

  )
  }
