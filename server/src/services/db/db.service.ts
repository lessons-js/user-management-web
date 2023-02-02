import exp from 'constants';
import { response } from 'express';
import { json } from 'node:stream/consumers';

const urlToSave = './src/services/db/users.json';
const fs = require('file-system');


function getFile(file) {
    return JSON.parse(fs.readFileSync(file));  
}

function saveFile(file) {
    if (!file) {
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
    
    users.forEach(e => {
        if(e.name === user.name) {
        throw('пользователь с такими данными уже зарегестрирован');
        }
    });
    users.push({id: lastItem ? lastItem.id + 1 : 1, ...user});
    saveFile(users)
}

function getUsers() {
    return getFile(urlToSave);
}

function updateUsers(userId, update) {
    const users = getFile(urlToSave);
    users.forEach(user => {
        if(user.id === userId) {
            const index = users.indexOf(user, 0);
            users[index] = {...user, ...update}
        }
    })
    saveFile(users)

}

function deleteUser(user) {
    const users = getUsers();
    users.forEach(e => {
        if(user.id === e.id) {
            const index = users.indexOf(e, 0);
            users.splice(index, index)
        }
    })
    saveFile(users)
}
deleteUser({"id" : 2})