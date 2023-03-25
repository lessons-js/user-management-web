import {updateUsersWithDelay} from '../mocks/fakeEndpoints'

const mockUsers = [{ "id": 1, "userName": "Oleg", "email": "oleg@gmail.com", "phoneNumber": 360507076591, "name": "Oleg", "phone": 360507076591 }, { "id": 2, "userName": "Max", "email": "Max@gmail.com", "phoneNumber": 3606678909 }, { "id": 3, "userName": "Viktor", "email": "Viktor@gmail.com", "phoneNumber": 3806622261986 }];


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
     const p1  = updateUsersWithDelay();
    
     p1.then((data) => {
      newArr = putUser(mockUsers, data.data, 'Maximilyan');
      console.log(newArr);
    });
}


/*


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
      newArr = putUser(data.result, 2, 'Alllllllllexx');
      console.log(newArr);
    })
}
*/
