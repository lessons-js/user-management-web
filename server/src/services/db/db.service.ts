import { response } from 'express';
import { json } from 'node:stream/consumers';


const fs = require('file-system');


function getFile() {
    return JSON.parse(fs.readFileSync('./src/services/db/users.json'));  
}

function saveFile(user) {
    const Users = getFile();
    Users.push(user)
    fs.writeFile('./src/services/db/users.json', JSON.stringify(Users, null, 2))
}
function creatUser(user) {

}

saveFile({"name" : "san9"})