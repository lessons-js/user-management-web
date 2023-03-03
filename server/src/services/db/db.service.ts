import * as fs from 'fs';

const dbFolderPass = './db-data/';

export class DB {
    data;
    uniqueIndexes: any = {};
    dbFilePass;

    constructor(name, options) {
        this.dbFilePass = `${dbFolderPass}${name}.json`;
        const fileExists = fs.existsSync(this.dbFilePass);
        const folderExists = fs.existsSync(dbFolderPass);

        if (!folderExists) {
            fs.mkdirSync(dbFolderPass);
        }

        if (!fileExists) {
            fs.writeFileSync(this.dbFilePass, '[]');
        }

        options.unique.forEach(element => {
            this.uniqueIndexes[element] = new Set();
        });

        this.data = JSON.parse(fs.readFileSync((this.dbFilePass), { encoding: 'utf-8' }));

        this.data.forEach(user => {
            options.unique.forEach(field => {
                if (user[field]) {
                    this.uniqueIndexes[field].add(user[field])
                }
            })
        });

    }

    findAll() {
        return this.data
    }

    saveFile(file) {
        if (!file) {
            throw ('Cant save file');
        }
        fs.writeFileSync(this.dbFilePass, JSON.stringify(file, null))
    }

    returnLastItem(arr) {
        return arr[arr.length - 1];
    }

    addItem(item) {
        const lastItem = this.returnLastItem(this.data);

        Object.keys(this.uniqueIndexes).forEach(fild => {
            if (this.uniqueIndexes[fild].has(item[fild])) {
                throw ('пользователь с такими данными уже зарегестрирован')
            }
        })

        this.data.push({ id: lastItem ? lastItem.id + 1 : 1, ...item });
        this.saveFile(this.data)
        return true
    }

    updateItem(itemId, update) {
        this.data.forEach((item, index) => {
            if (item.id === itemId) {
                this.data[index] = { ...item, ...update }
            }
        })

        this.saveFile(this.data)
    }

    deleteItem(itemID) {
        let isDelete = false;
        this.data.forEach((e, index) => {
            if (itemID === e.id) {
                this.data.splice(index, 1)
                this.saveFile(this.data)
                isDelete = true;
            }
        })
        return isDelete
    }
}

new DB('users', { unique: ['email', 'phone'] });
