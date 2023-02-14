import * as fs  from 'fs';

const urlToSave = './src/services/db/users.json';

function init() {
    const fileExists = fs.existsSync(urlToSave);
    if (!fileExists) {
        fs.writeFile(urlToSave, '[]', function (err) {
            if (err) console.error('file users don`t created');
        });
    }
}

init()

function userExists (user) {
    const users = getFile(urlToSave);
    const phone = new Set();
    const emal = new Set();

    users.forEach(user => {
        phone.add(user.phone)
        emal.add(user.emal)
    })

    return phone.has(user.phone) || emal.has(user.emal)
}

function getFile(file) {
    return JSON.parse(fs.readFileSync(file, {encoding: 'utf-8'}));  
}

function saveFile(file) {
    if (!file) {
        throw('Cant save file');
    } 
    fs.writeFile(urlToSave, JSON.stringify(file, null), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })
}
function returnLastItem(arr) {
    return arr[arr.length - 1];
}

export function addUser(user) {
    const users = getFile(urlToSave);
    const lastItem = returnLastItem(users);
    if(userExists(user)) {
        throw('пользователь с такими данными уже зарегестрирован');
    }
 
    users.push({id: lastItem ? lastItem.id + 1 : 1, ...user});
    saveFile(users)
    return userExists(user)
}

export function getUsers() {
    return getFile(urlToSave);
}

export function updateUsers(userId, update) {
    const users = getFile(urlToSave);
    users.forEach(user => {
        if(user.id === userId) {
            const index = users.indexOf(user, users.indexOf(user));
            users[index] = {...user, ...update}
        }
    })
    
    saveFile(users)

}

export function deleteUser(user) {
    const users = getUsers();
    users.forEach(e => {
        if(user.id === e.id) {
            const index = users.indexOf(e, users.indexOf(e));
            users.splice(index, index)
        }
    })

    saveFile(users)
    return userExists(user)
}
