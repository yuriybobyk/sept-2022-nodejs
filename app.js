const express = require('express');
const service = require('./services')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server has started well on PORT: ${PORT}`)
})

app.get('/users', async (req, res) => {
    const users = await service.reader();
    res.json(users)
})

app.get('/users/:userId', async (req, res) => {

    const {userId} = req.params;
    const users = await service.reader()
    const user = users.find((user)=> user.id === +userId);

    if (!user){
        return res.status(422).json(`User ${userId} doesn't  exist`)
    }
    res.json(user)
})

app.post('/users', async (req, res) => {
    const {name, age, gender} = req.body;
    if (!name || name.length < 2){
        res.status(400).json('Name should be longer then 2 letters')
    }
    if (!age || !Number.isInteger(age) || Number.isNaN(age)) {
        res.status(400).json('Age should be number and not empty');
    }
    if (!gender || (gender !=='male' && gender !=='female')){
        res.status(400).json('gender should be male or female')
    }

    const users = await service.reader();
    const newUser = {id: users[users.length-1]?.id + 1 || 1, name, age, gender};

    users.push(newUser);
    await service.writer(users);
    res.status(201).json(newUser)
})

app.put('/users/:userId', async (req, res) => {
    const {userId} = req.params;
    const {name, age, gender} = req.body;

    if (!name || name.length < 2){
        res.status(400).json('Name should be longer then 2 letters')
    }
    if (!age || !Number.isInteger(age) || Number.isNaN(age)) {
        res.status(400).json('Age should be number and not empty');
    }
    if (!gender || (gender !=='male' && gender !=='female')){
        res.status(400).json('gender should be male or female')
    }

    const users = await service.reader();
    const index = users.findIndex((user)=>user.id === +userId);

    if (index === -1){
        res.status(422).json(`User ${userId} doesn't exist`)
    }

    users[index] = {...users[index], ...req.body};

    await service.writer(users);
    res.status(201).json(users[index])
})

app.delete('/users/:userId', async (req, res) => {
    const {userId} = req.params

    const users = await service.reader();
    const index = users.findIndex((user)=>user.id === +userId);
    if (index === -1){
        res.status(422).json(`User ${userId} doesn't exist`)
    }

    users.splice(index, 1);
    await service.writer(users);
    res.sendStatus(204)
})
