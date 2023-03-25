const newUser  = {
    id: 4,
    userName: 'Orion',
    email: 'Orion@ukr.net',
    phoneNumber: '+380935954144'
  }


  function addUser(data, newUser,str) {
    for(const a of data) {
      str.push(a);
    }
    str.push(newUser);
  }

export const PostUsers = () => {
    let str = [];

      fetch(`${window.api.url}/users`,{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        addUser(data.result, newUser,str);
        console.log(str);
      })
}