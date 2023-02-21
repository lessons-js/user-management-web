function deleteUsers(users, index) {
  try {
    return users.filter((user, userIndex) => userIndex !== index);
  }
  catch {
    console.log("err");
  }
}

export const DeleteUsers = () => {
    const copyObj = [];
    const idUser = 3;
 
    fetch(`${window.api.url}/users`,{
        method: 'DELETE',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
      try {
        copyObj.push(deleteUsers(data.result, idUser - 1));
        console.log(copyObj);

      }
      catch (err) {
        console.log("Something went wrong.");
      }
    })

}
  