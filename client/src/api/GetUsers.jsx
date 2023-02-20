
export const GetUsers = () => {
      const arrObj = [];

      fetch(`${window.api.url}/users`)
      .then(res => res.json())
      .then(data => {
        for(let key in data.result) {
          arrObj.push(data.result[key]);
        }
        console.log(arrObj);
      })
}


