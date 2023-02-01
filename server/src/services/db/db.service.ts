import { response } from 'express';
import { json } from 'node:stream/consumers';

const urlToSave = './src/services/db/users.json';
const fs = require('file-system');


function getFile(file) {
    return JSON.parse(fs.readFileSync(file));  
}

function saveFile(urlToSave, file) {
    if (!file || !urlToSave) {
        throw('Cant save file');
    } 
    fs.writeFile(urlToSave, JSON.stringify(file, null, 2))
}
function returnLastItem(arr) {
    return arr[arr.length - 1];
}

function addUser(user) {
    const users = getFile(urlToSave);
    const lastItem = returnLastItem(users);
    user.id = lastItem ? user.id = lastItem.id + 1 || user.id : 1;
    
    users.forEach(e => {
        if(e.name === user.name) {
           throw('пользователь с такими данными уже зарегестрирован');
        }
    });
    users.push(user);
    saveFile(urlToSave, users)
}

function getUsers(file) {
    return getFile(file);
}

// addUser({"name" : "radik"})
console.log(getUsers(urlToSave))