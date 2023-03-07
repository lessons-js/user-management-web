import {getUsersWithDelay} from '../mocks/fakeEndpoints'

export const GetUsers = () => {
      const arrObj = [];

      const p1 = getUsersWithDelay();
      p1.then((data) => {
        for (const a of data.data){
            arrObj.push(a)
        }
        for (let i  = 0; i < arrObj.length; i++) {
          console.log(`${i}.`, arrObj[i]);   
        }
      })

         
}






/*
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

*/