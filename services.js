const fs = require('node:fs/promises');

const path = require('node:path');

const Path = path.join(process.cwd(), 'users', 'users.json');

const reader = async ()=>{
    const waiter = await fs.readFile(Path);
    const data = waiter.toString();
    return data ? JSON.parse(data) : [];
}

const writer = async (users) =>{
    await fs.writeFile(Path, JSON.stringify(users))
}

module.exports = {
    reader, writer
}