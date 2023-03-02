const fs = require('node:fs');
const path = require('node:path');

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const users = [
    {
        name: 'Oleh',
        age: 19,
        gender: 'male'
    },
    {
        name: 'Anton',
        age: 22,
        gender: 'female'
    },
    {
        name: 'Anya',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Elizavetta',
        age: 35,
        gender: 'female'
    },
    {
        name: 'Cocos',
        age: 70,
        gender: 'mixed'
    }
]

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server has started well on PORT: ${PORT}`)
})

app.get('/users', (req, res)=>{
    res.json(users)
})

app.get('/users/:userId', (req, res)=>{

    const {userId}=req.params;
    const user = users[+userId-1];

    res.json(user)

})

app.post('/users', (req, res)=>{
    const body = req.body;
    users.push(body)

    res.json({
        message: 'user created'
    })
})

app.put('/users/:userId', (req, res)=>{
    const {userId} = req.params;
    const updatedUser = req.body;

    users[+userId] = updatedUser;

    res.json({
        message: 'User updated',
        data: users[+userId]
    })
})

app.delete('/users/:userId', (req, res)=>{
    const {userId}=req.params

    users.splice(+userId, 1);

    res.json({
        message: 'user deleted'
    })
})
