
function delUser(users, id) {
  let str = [];

  for(const a of users) {
    if (a.id !== id)
      str.push(a);
  }
  return str;
}

export const DeleteUsers = () => {  
    let newArr = [];
 
    fetch(`${window.api.url}/users`,{
        method: 'DELETE',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
    newArr = delUser(data.result, 2) // 2 is id user which we want to del
    console.log(newArr);
    })
}
  