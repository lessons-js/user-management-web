//import {PostUsers} from './api/PostUsers';
import { useEffect, useState } from 'react';
import { GetUsers } from './api/GetUsers';
//import {DeleteUsers} from './api/DeleteUsers';
//import {PutUsers} from './api/PutUsers';


import './App.css';


function App() {
  const [users, setUsers] = useState([]);
  const token = '';

  useEffect(() => {
    GetUsers().then(users => {
      console.log('users in app component', users);
      setUsers(users);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test
        </p>
        {users.map((user, index) => <div key={user.id}>{index + 1}.{user.userName}</div>)}
      </header>
    </div>
  )
};

export default App;