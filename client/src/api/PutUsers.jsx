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



export const PutUsers = () => {
    let newArr = [];
      fetch(`${window.api.url}/users`,{
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        newArr = putUser(data.result, 2, 'Alex');
        console.log(newArr);
      })
}
